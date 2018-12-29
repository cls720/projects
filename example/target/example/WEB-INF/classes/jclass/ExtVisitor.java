// Decompiled by Jad v1.5.8e2. Copyright 2001 Pavel Kouznetsov.
// Jad home page: http://kpdus.tripod.com/jad.html
// Decompiler options: packimports(3) fieldsfirst ansi space 

package com.spket.js.profile;

import com.spket.as.core.compiler.CharOperation;
import com.spket.as.internal.compiler.ast.*;
import com.spket.as.internal.compiler.lookup.Frame;
import com.spket.as.internal.compiler.parser.BufferedScanner;
import com.spket.js.model.*;
import com.spket.util.Debug;
import com.spket.util.StringUtils;
import java.io.PrintStream;
import java.util.*;
import org.eclipse.swt.graphics.Point;

// Referenced classes of package com.spket.js.profile:
//			JSVisitor, ConfigParser, ExtFunction, ExtNamespace, 
//			ProfileLoader, PropertyFinder

public class ExtVisitor extends JSVisitor
{

	public static final String P_xtype = "xtype";
	public static final String P_override = "override";
	public static final String P_superclass = "superclass";
	public static final String C_ExtBase = "Ext.Base";
	public static final char NS_Ext[] = "Ss".toCharArray();
	public static final char F_ns[] = "ns".toCharArray();
	public static final char F_namespace[] = "namespace".toCharArray();
	public static final char F_apply[] = "apply".toCharArray();
	public static final char F_applyIf[] = "applyIf".toCharArray();
	public static final char F_define[] = "define".toCharArray();
	public static final char F_override[] = "override".toCharArray();
	public static final char F_create[] = "create".toCharArray();
	public static final char F_reg[] = "reg".toCharArray();
	public static final char P_alias[] = "alias".toCharArray();
	public static final char P_mixins[] = "mixins".toCharArray();
	public static final char P_statics[] = "statics".toCharArray();
	public static final char F_singleton[] = "singleton".toCharArray();
	public static final char P_alternateClassName[] = "alternateClassName".toCharArray();
	public static final char C_Observable[] = "Ext.util.Observable".toCharArray();
	private static final char F_addMethods[] = "addMethods".toCharArray();
	private static final char C_Element[] = "Element".toCharArray();
	private boolean checkConfig;
	private ConfigParser fConfigParser;
	private Map configs;
	private ExtNamespace fNamespace;
	private Map alias;
	private Map xtypes;
	private JSObject extBase;
	private JSObject extObservable;
	private ObjectImpl elPrototype;

	public ExtVisitor()
	{
		configs = new HashMap();
		fNamespace = new ExtNamespace();
	}

	public static ObjectInitializer findProperty(Expression expression)
	{
		ObjectInitializer objectinitializer = null;
		if (expression instanceof ObjectInitializer)
			objectinitializer = (ObjectInitializer)expression;
		else
		if (expression instanceof InvokeExpression)
		{
			expression = ((InvokeExpression)expression).receiver;
			if (expression instanceof FunctionExpression)
			{
				Block block = ((FunctionExpression)expression).body;
				if (block != null)
				{
					Statement astatement[] = block.statements;
					if (astatement != null && astatement.length > 0)
					{
						char ac[] = null;
						for (int i = 0; i < astatement.length; i++)
						{
							Statement statement = astatement[i];
							if (!(statement instanceof ReturnStatement))
								continue;
							expression = ((ReturnStatement)statement).expression;
							if (expression instanceof ObjectInitializer)
								return (ObjectInitializer)expression;
							if (!(expression instanceof IdentifierReference))
								continue;
							ac = ((IdentifierReference)expression).token;
							break;
						}

						if (ac != null)
						{
							for (int j = 0; j < astatement.length; j++)
							{
								Statement statement1 = astatement[j];
								if (!(statement1 instanceof ExpressionStatement))
									continue;
								Expression aexpression[] = ((ExpressionStatement)statement1).expressions;
								if (aexpression == null || aexpression.length <= 0)
									continue;
								for (int k = 0; k < aexpression.length; k++)
								{
									expression = aexpression[k];
									if (!(expression instanceof Assignment))
										continue;
									Assignment assignment = (Assignment)expression;
									if ((assignment.lhs instanceof IdentifierReference) && (assignment.expression instanceof ObjectInitializer) && CharOperation.equals(ac, ((IdentifierReference)assignment.lhs).token))
										return (ObjectInitializer)assignment.expression;
								}

							}

						}
					}
				}
			}
		}
		return objectinitializer;
	}

	public static ISlot findSlot(JSObject jsobject, String s)
	{
		String as[] = StringUtils.split(s, '.');
		if (as.length > 0)
		{
			int i = 0;
			do
			{
				if (i >= as.length)
					break;
				String s1 = as[i];
				ISlot islot = jsobject.getSlot(s1);
				if (islot == null)
					break;
				if (i == as.length - 1)
					return islot;
				jsobject = islot.getObject();
				if (jsobject == null)
					break;
				i++;
			} while (true);
		}
		return null;
	}

	public static JSObject find(JSObject jsobject, String s)
	{
		ISlot islot = findSlot(jsobject, s);
		if (islot != null)
			return islot.getObject();
		else
			return null;
	}

	public static void set(JSObject jsobject, String s, ISlot islot)
	{
		String as[] = StringUtils.split(s, '.');
		if (as.length > 0)
		{
			for (int i = 0; i < as.length - 1; i++)
			{
				s = as[i];
				Object obj = jsobject.getProperty(s);
				if (obj == null)
				{
					obj = new ObjectImpl();
					jsobject.setProperty(s, ((JSObject) (obj)));
				}
				jsobject = ((JSObject) (obj));
			}

			s = as[as.length - 1];
			if (jsobject instanceof JSObjectExt)
				((JSObjectExt)jsobject).defineProperty(s, islot);
			else
				jsobject.setProperty(s, islot.getObject());
		}
	}

	protected void addMethods(Expression expression, Expression expression1)
	{
		if (expression1 instanceof InvokeExpression)
		{
			InvokeExpression invokeexpression = (InvokeExpression)expression1;
			if (invokeexpression.receiver instanceof FunctionExpression)
			{
				FunctionExpression functionexpression = (FunctionExpression)invokeexpression.receiver;
				if (functionexpression.body != null)
				{
					expression1 = PropertyFinder.find(functionexpression.body);
					if (expression1 == null)
						return;
				}
			}
		}
		if (elPrototype == null)
		{
			int i = size();
			expression.traverse(this, null);
			JSObject jsobject = pop(i);
			if (jsobject != null)
			{
				JSObject jsobject1 = jsobject.getProperty("prototype");
				if (jsobject1 == null)
				{
					elPrototype = new ObjectImpl();
					jsobject.setProperty("prototype", elPrototype);
				} else
				if (jsobject1 instanceof ObjectImpl)
					elPrototype = (ObjectImpl)jsobject1;
			}
			if (elPrototype == null)
				return;
		}
		apply(elPrototype, expression1, false);
	}

	protected ObjectImpl apply(Expression expression, Expression expression1, boolean flag)
	{
		int i = size();
		expression.traverse(this, null);
		JSObject jsobject = pop(i);
		if (jsobject instanceof ObjectImpl)
		{
			ObjectImpl objectimpl = (ObjectImpl)jsobject;
			apply(((JSObjectExt) (objectimpl)), expression1, flag);
			return objectimpl;
		} else
		{
			return null;
		}
	}

	protected void apply(JSObjectExt jsobjectext, Expression expression, boolean flag)
	{
		int i = size();
		expression.traverse(this, null);
		JSObject jsobject = pop(i);
		if (jsobject instanceof ObjectImpl)
		{
			Map map = ((ObjectImpl)jsobject).getSlots();
			if (map != null && map.size() > 0)
			{
				Iterator iterator = map.entrySet().iterator();
				do
				{
					if (!iterator.hasNext())
						break;
					java.util.Map.Entry entry = (java.util.Map.Entry)iterator.next();
					String s = (String)entry.getKey();
					if (flag || !jsobjectext.hasProperty(s))
						jsobjectext.defineProperty(s, entry.getValue());
				} while (true);
			}
		} else
		{
			System.err.println("Shoule be Object");
		}
	}

	protected void mixin(JSObjectExt jsobjectext, Expression expression)
	{
		if (expression instanceof ObjectInitializer)
		{
			Expression aexpression[] = ((ObjectInitializer)expression).expressions;
			if (aexpression != null && aexpression.length > 0)
			{
				for (int i = 0; i < aexpression.length; i++)
				{
					expression = aexpression[i];
					if (!(expression instanceof FieldLiteral))
						continue;
					JSObject jsobject = null;
					expression = ((FieldLiteral)expression).value;
					if (expression instanceof StringLiteral)
					{
						char ac[] = ((StringLiteral)expression).source();
						if (CharOperation.equals(C_Observable, ac))
						{
							if (extObservable == null)
								jsobject = extObservable = find(globalScope, new String(ac));
							else
								jsobject = extObservable;
						} else
						{
							jsobject = find(globalScope, new String(ac));
						}
					} else
					if (expression != null)
					{
						int j = size();
						expression.traverse(this, null);
						jsobject = pop(j);
					}
					if (jsobject != null)
						jsobject = jsobject.getProperty("prototype");
					if (!(jsobject instanceof JSObjectExt))
						continue;
					Map map = ((JSObjectExt)jsobject).getSlots();
					if (map == null || map.size() <= 0)
						continue;
					java.util.Map.Entry entry;
					String s;
					for (Iterator iterator = map.entrySet().iterator(); iterator.hasNext(); jsobjectext.defineProperty(s, entry.getValue()))
					{
						entry = (java.util.Map.Entry)iterator.next();
						s = (String)entry.getKey();
					}

				}

			}
		}
	}

	protected void override(Expression expression, Expression aexpression[])
	{
		if (aexpression == null || aexpression.length == 0)
			return;
		int i = 0;
		JSObject jsobject = null;
		if (expression == null)
		{
			if (aexpression.length == 2)
			{
				i = 1;
				int j = size();
				aexpression[0].traverse(this, null);
				jsobject = pop(j);
			}
		} else
		{
			int k = size();
			expression.traverse(this, null);
			jsobject = pop(k);
		}
		if (jsobject != null)
		{
			ObjectImpl objectimpl = null;
			JSObject jsobject1 = jsobject.getProperty("prototype");
			if (jsobject1 == null)
			{
				objectimpl = new ObjectImpl();
				jsobject.setProperty("prototype", objectimpl);
			} else
			if (jsobject1 instanceof ObjectImpl)
				objectimpl = (ObjectImpl)jsobject1;
			if (objectimpl != null)
				apply(objectimpl, aexpression[i], true);
		}
	}

	protected void defineSuperClass(JSObject jsobject, Expression aexpression[], boolean flag)
	{
		Expression expression = null;
		if (aexpression != null && aexpression.length > 0)
		{
			for (int i = 0; i < aexpression.length; i++)
			{
				if (!(aexpression[i] instanceof FieldLiteral))
					continue;
				char ac[] = null;
				FieldLiteral fieldliteral = (FieldLiteral)aexpression[i];
				if (fieldliteral.field instanceof IdentifierReference)
					ac = ((IdentifierReference)fieldliteral.field).token;
				else
				if (fieldliteral.field instanceof StringLiteral)
					ac = ((StringLiteral)fieldliteral.field).source();
				if (ac == null || !CharOperation.equals(F_extend, ac))
					continue;
				expression = fieldliteral.value;
				break;
			}

		}
		JSObject jsobject1 = null;
		if (expression == null)
		{
			if (extBase == null)
				extBase = find(globalScope, "Ext.Base");
			jsobject1 = extBase;
		} else
		{
			String s = ProfileLoader.getString(expression);
			if (s != null)
				jsobject1 = find(globalScope, s);
		}
		if (jsobject1 != null)
		{
			if (flag && (jsobject1 instanceof JSFunction))
				jsobject1 = jsobject1.getProperty("prototype");
			if (jsobject1 != null)
				jsobject.setPrototype(jsobject1);
		}
	}

	protected void defineClass(StringLiteral stringliteral, Expression expression, Expression expression1)
	{
		Object obj = globalScope;
		String s = new String(stringliteral.source());
		String as[] = StringUtils.split(s, '.');
		if (as.length > 1)
		{
			for (int i = 0; i < as.length - 1; i++)
			{
				String s1 = as[i];
				Object obj3 = ((JSObject) (obj)).getProperty(s1);
				if (obj3 == null)
				{
					obj3 = new ObjectImpl();
					((JSObject) (obj)).setProperty(s1, ((JSObject) (obj3)));
				}
				obj = obj3;
			}

		}
		Object obj1 = null;
		Object obj2 = null;
		ExtFunction extfunction = null;
		Expression aexpression[] = null;
		boolean flag = false;
		s = as[as.length - 1];
		ObjectInitializer objectinitializer = findProperty(expression);
		if (objectinitializer != null)
			aexpression = objectinitializer.expressions;
		if (flag = isSingleton(aexpression))
			obj2 = new ObjectImpl(s);
		else
			obj2 = extfunction = new ExtFunction(s);
		((JSObjectExt) (obj2)).setParentScope(globalScope);
		ISlot islot = setProperty(stringliteral, ((JSObject) (obj)), s, ((JSObject) (obj2)), true);
		if (islot != null)
			islot.setData(ISlot.P_COMMENT, obj1);
		if (aexpression != null && aexpression.length > 0)
		{
			int j = size();
			Object obj4 = null;
			Object obj5 = null;
			defineSuperClass(((JSObject) (obj2)), aexpression, flag);
			if (flag)
			{
				obj5 = obj2;
			} else
			{
				JSObject jsobject1 = ((JSObjectExt) (obj2)).getProperty("prototype");
				if (jsobject1 == null)
				{
					obj5 = new ObjectImpl();
					((JSObjectExt) (obj2)).setProperty("prototype", ((JSObject) (obj5)));
				} else
				if (jsobject1 instanceof JSObjectExt)
					obj5 = (ObjectImpl)jsobject1;
			}
label0:
			for (int k = 0; k < aexpression.length; k++)
			{
				JSDoc jsdoc = null;
				if (!(aexpression[k] instanceof FieldLiteral))
					continue;
				char ac[] = null;
				FieldLiteral fieldliteral = (FieldLiteral)aexpression[k];
				if (fieldliteral.field instanceof IdentifierReference)
					ac = ((IdentifierReference)fieldliteral.field).token;
				else
				if (fieldliteral.field instanceof StringLiteral)
					ac = ((StringLiteral)fieldliteral.field).source();
				if (ac == null)
					continue;
				Expression expression2 = fieldliteral.value;
				if (CharOperation.equals(F_extend, ac) || expression2 == null)
					continue;
				if (CharOperation.equals(P_alias, ac))
				{
					String as1[] = ProfileLoader.getStrings(expression2);
					int i1 = 0;
					do
					{
						if (i1 >= as1.length)
							continue label0;
						String s2 = as1[i1];
						if (s2.length() > 0)
							alias.put(s2, islot);
						i1++;
					} while (true);
				}
				if (CharOperation.equals(P_statics, ac))
				{
					apply(((JSObjectExt) (obj2)), expression2, true);
					continue;
				}
				if (CharOperation.equals(P_mixins, ac))
				{
					mixin(((JSObjectExt) (obj5)), expression2);
					continue;
				}
				expression2.traverse(this, null);
				JSObject jsobject2 = pop(j);
				if (jsobject2 instanceof FunctionImpl)
				{
					FunctionImpl functionimpl = (FunctionImpl)jsobject2;
					if (functionimpl.getDocument() == null)
					{
						jsdoc = createDoc(fieldliteral.field.sourceStart, lexer);
						functionimpl.setDocument(jsdoc);
					}
				}
				Slot slot = new Slot();
				((JSObjectExt) (obj5)).defineProperty(new String(ac), slot);
				slot.setData(ISlot.P_SOURCE, fileName);
				slot.setObject(jsobject2);
				slot.setData(ISlot.P_RANGE, new Point(fieldliteral.field.sourceStart, fieldliteral.field.sourceEnd));
				if (jsdoc == null)
					jsdoc = createDoc(fieldliteral.field.sourceStart, lexer);
				slot.setData(ISlot.P_COMMENT, jsdoc);
				if (CharOperation.equals(P_alternateClassName, ac) && (expression2 instanceof StringLiteral))
					set(globalScope, new String(((StringLiteral)expression2).source()), islot);
			}

			if (expression1 != null && (expression1 instanceof FunctionExpression))
			{
				FunctionExpression functionexpression = (FunctionExpression)expression1;
				if (functionexpression.body != null)
				{
					JSObject jsobject = localScope;
					JSObject jsobject3 = thisScope;
					localScope = new ObjectImpl();
					localScope.setPrototype(jsobject);
					thisScope = ((JSObject) (obj2));
					int l = size();
					functionexpression.body.traverseBody(this, null);
					reset(l);
					localScope = jsobject;
					thisScope = jsobject3;
				}
			}
			if (extfunction != null)
			{
				checkConfig = true;
				visit(objectinitializer, null);
				if (configs.size() > 0)
				{
					extfunction.addConfig(configs);
					configs.clear();
				}
				checkConfig = false;
				reset(j);
			}
		}
	}

	protected void defineNamespaces(Expression aexpression[])
	{
label0:
		for (int i = 0; i < aexpression.length; i++)
		{
			Expression expression = aexpression[i];
			if (!(expression instanceof StringLiteral))
				continue;
			Object obj = globalScope;
			String as[] = StringUtils.split(new String(((StringLiteral)expression).source()), '.');
			int j = 0;
			do
			{
				if (j >= as.length)
					continue label0;
				String s = as[j];
				ISlot islot = null;
				Object obj1 = ((JSObject) (obj)).getProperty(s);
				if (obj1 == null)
				{
					obj1 = new ObjectImpl();
					((JSObject) (obj)).setProperty(s, ((JSObject) (obj1)));
					islot = ((JSObject) (obj)).getSlot(s);
					if (islot != null)
					{
						islot.setData(ISlot.P_SOURCE, fileName);
						islot.setData(ISlot.P_RANGE, new Point(expression.sourceStart, expression.sourceEnd));
					}
				} else
				{
					islot = ((JSObject) (obj)).getSlot(s);
				}
				if (islot != null)
					islot.setFlag(0x800000, true);
				obj = obj1;
				j++;
			} while (true);
		}

	}

	protected void construct(JSFunction jsfunction, JSObject jsobject, Expression aexpression[])
	{
		int i = jsfunction.getNumberOfParameters();
		if (i > 0 && (jsobject instanceof ObjectImpl))
		{
			Param aparam[] = jsfunction.getParameters();
			int j = 0;
			do
			{
				if (j >= i)
					break;
				if ("config".equals(aparam[j].getName()))
				{
					if (aexpression != null && aexpression.length > j)
						apply((ObjectImpl)jsobject, aexpression[j], false);
					break;
				}
				j++;
			} while (true);
		}
	}

	protected JSNamespace getNamespace()
	{
		return fNamespace;
	}

	public void setScope(JSObject jsobject)
	{
		super.setScope(jsobject);
		if (globalScope != null)
		{
			Object obj = globalScope.getValue();
			if (obj instanceof Map)
			{
				alias = (Map)obj;
			} else
			{
				Map map = alias = new HashMap();
				globalScope.setValue(map);
			}
		}
	}

	public boolean visit(Assignment assignment, Frame frame)
	{
		if (configs.size() > 0)
		{
			Debug.warn("Config is not null");
			configs.clear();
		}
		ExtFunction extfunction = null;
		if (globalScope == localScope)
		{
			Expression expression = assignment.lhs;
			if (expression instanceof BinaryExpression)
			{
				BinaryExpression binaryexpression = (BinaryExpression)expression;
				if (binaryexpression.right instanceof IdentifierReference)
				{
					IdentifierReference identifierreference = (IdentifierReference)binaryexpression.right;
					if (StringUtils.equals("prototype", identifierreference.token, true))
					{
						int i = size();
						binaryexpression.left.traverse(this, frame);
						JSObject jsobject = pop(i);
						if (jsobject instanceof ExtFunction)
							extfunction = (ExtFunction)jsobject;
					}
				}
			}
		}
		checkConfig = extfunction != null;
		super.visit(assignment, frame);
		if (checkConfig)
		{
			checkConfig = false;
			if (configs.size() > 0)
			{
				extfunction.addConfig(configs);
				configs.clear();
			}
		}
		return false;
	}

	public boolean visit(CompilationUnitDeclaration compilationunitdeclaration, Frame frame)
	{
		checkConfig = false;
		return super.visit(compilationunitdeclaration, frame);
	}

	public boolean visit(IfStatement ifstatement, Frame frame)
	{
		if (globalScope == localScope && ifstatement.thenStatement != null)
			ifstatement.thenStatement.traverse(this, frame);
		return false;
	}

	public static void defineSuperclass(JSObjectExt jsobjectext, Expression expression, String s)
	{
		JSObject jsobject = jsobjectext.getPrototype();
		if (jsobject != null)
		{
			jsobject = jsobject.getProperty("prototype");
			if (jsobject != null)
			{
				Slot slot = new Slot();
				slot.setData(ISlot.P_SOURCE, s);
				if (expression != null)
					slot.setData(ISlot.P_RANGE, new Point(expression.sourceStart, expression.sourceEnd));
				slot.setObject(new PrototypeObject(jsobject));
				jsobjectext.defineProperty("superclass", slot);
			}
		}
		NativeFunction nativefunction = new NativeFunction("override");
		nativefunction.addParameter("overrides", "Object");
		Slot slot1 = new Slot();
		slot1.setObject(nativefunction);
		jsobjectext.defineProperty("override", slot1);
	}

	public static boolean isSingleton(Expression aexpression[])
	{
		Object obj = null;
		if (aexpression != null && aexpression.length > 0)
		{
			for (int i = 0; i < aexpression.length; i++)
			{
				if (!(aexpression[i] instanceof FieldLiteral))
					continue;
				char ac[] = null;
				FieldLiteral fieldliteral = (FieldLiteral)aexpression[i];
				if (fieldliteral.field instanceof IdentifierReference)
					ac = ((IdentifierReference)fieldliteral.field).token;
				else
				if (fieldliteral.field instanceof StringLiteral)
					ac = ((StringLiteral)fieldliteral.field).source();
				if (ac == null || !CharOperation.equals(F_singleton, ac))
					continue;
				Expression expression = fieldliteral.value;
				if (expression instanceof BooleanLiteral)
					return ((BooleanLiteral)expression).value;
				break;
			}

		}
		return false;
	}

	public boolean visit(InvokeExpression invokeexpression, Frame frame)
	{
		if (invokeexpression.arguments != null && (invokeexpression.receiver instanceof BinaryExpression))
		{
			BinaryExpression binaryexpression = (BinaryExpression)invokeexpression.receiver;
			if (binaryexpression.right instanceof IdentifierReference)
			{
				if (binaryexpression.left instanceof IdentifierReference)
				{
					if (CharOperation.equals(NS_Ext, ((IdentifierReference)binaryexpression.left).token))
					{
						char ac[] = ((IdentifierReference)binaryexpression.right).token;
						if (CharOperation.equals(F_namespace, ac) || CharOperation.equals(F_ns, ac))
						{
							defineNamespaces(invokeexpression.arguments);
							return false;
						}
						if (CharOperation.equals(F_apply, ac))
						{
							Expression aexpression1[] = invokeexpression.arguments;
							if (aexpression1.length == 2)
								apply(aexpression1[0], aexpression1[1], true);
							else
							if (aexpression1.length == 3)
							{
								ObjectImpl objectimpl = apply(aexpression1[0], aexpression1[2], true);
								if (objectimpl != null)
									apply(objectimpl, aexpression1[1], true);
							} else
							{
								System.err.println("Illegal Argument");
							}
							return false;
						}
						if (CharOperation.equals(F_applyIf, ac))
						{
							Expression aexpression2[] = invokeexpression.arguments;
							if (aexpression2.length == 2)
								apply(aexpression2[0], aexpression2[1], false);
							else
								System.err.println("Illegal Argument");
							return false;
						}
						if (CharOperation.equals(F_extend, ac))
						{
							Expression aexpression3[] = invokeexpression.arguments;
							if (aexpression3.length == 2 || aexpression3.length == 3)
							{
								int i = size();
								checkConfig = true;
								aexpression3[0].traverse(this, frame);
								JSObject jsobject = pop(i);
								if (jsobject instanceof ObjectImpl)
								{
									ExtFunction extfunction = null;
									if (aexpression3.length == 2)
									{
										extfunction = new ExtFunction(null);
										extfunction.setParentScope(globalScope);
										extfunction.setPrototype(jsobject);
										ObjectImpl objectimpl1 = null;
										jsobject = extfunction.getProperty("prototype");
										if (jsobject == null)
										{
											objectimpl1 = new ObjectImpl();
											extfunction.setProperty("prototype", objectimpl1);
										} else
										if (jsobject instanceof ObjectImpl)
											objectimpl1 = (ObjectImpl)jsobject;
										if (objectimpl1 != null)
											apply(objectimpl1, aexpression3[1], true);
										push(extfunction);
										if (configs.size() > 0)
										{
											extfunction.addConfig(configs);
											configs.clear();
										}
										checkConfig = false;
										defineSuperclass(extfunction, aexpression3[0], fileName);
										return false;
									}
									if (jsobject instanceof ExtFunction)
										extfunction = (ExtFunction)jsobject;
									ObjectImpl objectimpl2 = (ObjectImpl)jsobject;
									aexpression3[1].traverse(this, frame);
									jsobject = pop(i);
									if (jsobject instanceof ObjectImpl)
										objectimpl2.setPrototype(jsobject);
									if (aexpression3.length == 3)
									{
										aexpression3[2].traverse(this, frame);
										JSObject jsobject1 = pop(i);
										if (configs.size() > 0)
										{
											if (extfunction != null)
												extfunction.addConfig(configs);
											configs.clear();
										}
										if (jsobject1 instanceof ObjectImpl)
										{
											Map map = ((ObjectImpl)jsobject1).getSlots();
											if (map != null && map.size() > 0)
											{
												ObjectImpl objectimpl3 = null;
												JSObject jsobject2 = objectimpl2.getProperty("prototype");
												if (jsobject2 == null)
												{
													objectimpl3 = new ObjectImpl();
													objectimpl2.setProperty("prototype", objectimpl3);
												} else
												if (jsobject2 instanceof ObjectImpl)
													objectimpl3 = (ObjectImpl)jsobject2;
												if (objectimpl3 == null)
												{
													System.err.println("Something wrong with prototype");
												} else
												{
													java.util.Map.Entry entry;
													for (Iterator iterator = map.entrySet().iterator(); iterator.hasNext(); objectimpl3.defineProperty((String)entry.getKey(), entry.getValue()))
														entry = (java.util.Map.Entry)iterator.next();

												}
											}
										}
									}
									defineSuperclass(objectimpl2, aexpression3[1], fileName);
								}
							} else
							{
								System.err.println("Illegal Argument");
							}
							checkConfig = false;
							return false;
						}
						if (CharOperation.equals(F_override, ac))
						{
							override(null, invokeexpression.arguments);
							return false;
						}
						if (CharOperation.equals(F_define, ac))
						{
							Expression aexpression4[] = invokeexpression.arguments;
							if (aexpression4 != null && aexpression4.length >= 2 && (aexpression4[0] instanceof StringLiteral))
								defineClass((StringLiteral)aexpression4[0], aexpression4[1], aexpression4.length <= 2 ? null : aexpression4[2]);
						} else
						if (CharOperation.equals(F_reg, ac))
						{
							Expression aexpression5[] = invokeexpression.arguments;
							if (aexpression5 != null && aexpression5.length > 1)
							{
								String s = ProfileLoader.getString(aexpression5[0]);
								if (s != null && s.length() > 0)
								{
									int j = size();
									aexpression5[1].traverse(this, frame);
									JSObject jsobject3 = pop(j);
									if (jsobject3 instanceof JSFunction)
									{
										if (xtypes == null)
											if (alias == null)
											{
												xtypes = new HashMap();
											} else
											{
												xtypes = (Map)alias.get(StringUtils.EMPTY_CHARS);
												if (xtypes == null)
												{
													xtypes = new HashMap();
													alias.put(StringUtils.EMPTY_CHARS, xtypes);
												}
											}
										xtypes.put(s, jsobject3);
									}
								}
							}
						}
					}
				} else
				if ((binaryexpression.left instanceof BinaryExpression) && CharOperation.equals(F_addMethods, ((IdentifierReference)binaryexpression.right).token))
				{
					if (isNamespace(binaryexpression.left, NS_Ext, C_Element))
					{
						Expression aexpression[] = invokeexpression.arguments;
						if (aexpression.length > 0)
							addMethods(binaryexpression.left, aexpression[0]);
					}
					return false;
				}
				if (CharOperation.equals(F_override, ((IdentifierReference)binaryexpression.right).token))
				{
					override(binaryexpression.left, invokeexpression.arguments);
					return false;
				}
			}
		}
		return super.visit(invokeexpression, frame);
	}

	protected void consumeComments()
	{
		int i = lexer.commentPtr + 1;
		if (i < 1)
			return;
		char ac[] = lexer.source;
		try
		{
			for (int j = 0; j < i; j++)
			{
				int k = lexer.commentStarts[j];
				if (k >= 0)
				{
					int l = lexer.commentStops[j];
					if (l > k)
					{
						int i1 = lexer.commentTagStarts[j];
						if (i1 > 0 && ac[++i1] == 'c' && Character.isWhitespace(ac[i1 + 5]) && ac[++i1] == 'l' && ac[++i1] == 'a' && ac[++i1] == 's' && ac[++i1] == 's')
						{
							i1++;
							StringBuffer stringbuffer = new StringBuffer();
							do
							{
								if (i1 >= l)
									break;
								char c = ac[i1++];
								if (c == '\n' || c == '\r')
									break;
								stringbuffer.append(c);
							} while (true);
							if (stringbuffer.length() > 0)
							{
								String as[] = StringUtils.split(stringbuffer.toString(), '.', false);
								if (as.length > 0)
								{
									ISlot islot = null;
									JSObject jsobject = globalScope;
									int j1 = 0;
									do
									{
										if (j1 >= as.length)
											break;
										islot = jsobject.getSlot(as[j1]);
										if (islot != null)
											jsobject = islot.getObject();
										else
											jsobject = null;
										if (jsobject == null)
											break;
										j1++;
									} while (true);
									if (islot != null && jsobject != null)
									{
										if (as.length > 1)
											fNamespace.registerShortHand(as);
										Object obj = (JSDoc)islot.getData(ISlot.P_COMMENT);
										if (obj == null || !((JSDoc) (obj)).isValid())
										{
											JSDocImpl jsdocimpl;
											obj = jsdocimpl = new JSDocImpl(ac, k, l);
											jsdocimpl.setNamespace(getNamespace());
											islot.setData(ISlot.P_COMMENT, obj);
											if (jsobject instanceof ExtFunction)
											{
												ExtFunction extfunction = (ExtFunction)jsobject;
												if (extfunction.getDocument() == null)
													extfunction.setDocument(((JSDoc) (obj)));
											}
										} else
										if (jsobject instanceof ExtFunction)
										{
											JSDoc jsdoc = ((ExtFunction)jsobject).getDocument();
											if (jsdoc == null || jsdoc != obj)
												System.out.println("JSDoc 1: " + stringbuffer.toString());
										}
										if (jsobject instanceof ExtFunction)
										{
											if (configs.size() > 0)
												configs.clear();
											parseConfig(lexer.source, lexer.commentTagStarts[j], l);
											if (configs.size() > 0)
											{
												((ExtFunction)jsobject).addConfig(configs);
												configs.clear();
											}
										}
									} else
									{
										Debug.debug(stringbuffer.toString());
									}
								}
							}
						}
					}
				}
			}

		}
		catch (ArrayIndexOutOfBoundsException arrayindexoutofboundsexception)
		{
			Debug.debug(arrayindexoutofboundsexception);
		}
		super.consumeComments();
	}

	public boolean visit(ObjectInitializer objectinitializer, Frame frame)
	{
		int i = size();
		super.visit(objectinitializer, frame);
		int j = lexer.commentPtr + 1;
		if (j > 0 && checkConfig && size() > i)
		{
			if (configs.size() > 0)
				configs.clear();
			int k = objectinitializer.sourceStart;
			int l = objectinitializer.sourceEnd;
			for (int i1 = 0; i1 < j; i1++)
			{
				if (lexer.commentTagStarts[i1] <= k)
					continue;
				if (lexer.commentStops[i1] >= l)
					break;
				parseConfig(lexer.source, lexer.commentTagStarts[i1], lexer.commentStops[i1]);
			}

		}
		return false;
	}

	protected void parseConfig(char ac[], int i, int j)
	{
		if (fConfigParser == null)
			fConfigParser = new ConfigParser(ac, i, j);
		else
			fConfigParser.reset(ac, i, j);
		fConfigParser.setURL(fileName);
		fConfigParser.parse(configs);
	}

}
