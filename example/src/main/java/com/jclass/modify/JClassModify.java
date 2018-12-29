package com.jclass.modify;

import java.io.DataInput;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;

import org.gjt.jclasslib.io.ClassFileWriter;
import org.gjt.jclasslib.structures.CPInfo;
import org.gjt.jclasslib.structures.ClassFile;
import org.gjt.jclasslib.structures.constants.ConstantUtf8Info;

public class JClassModify {
	public static void main(String[] args) throws Exception {

		String filePath = "E:\\project\\java\\j2ee\\example\\src\\main\\resources\\jclass\\ExtVisitor.class";
		FileInputStream fis = new FileInputStream(filePath);

		DataInput di = new DataInputStream(fis);
		ClassFile cf = new ClassFile();
		cf.read(di);
		CPInfo[] infos = cf.getConstantPool();

		int count = infos.length;
		for (int i = 0; i < count; i++) {
			if (infos[i] != null) {
				System.out.print(i);
				System.out.print(" = ");
				System.out.print(infos[i].getVerbose());
				System.out.print(" = ");
				System.out.println(infos[i].getTagVerbose());
				if (i == 49) {
					ConstantUtf8Info uInfo = (ConstantUtf8Info) infos[i];
					uInfo.setBytes("Ss".getBytes());
					infos[i] = uInfo;
				}
				// if(i == 49){
				// ConstantStringInfo uInfo2 = (ConstantStringInfo)infos[i];
				// System.out.println(uInfo2.toString());
				// infos[i]=uInfo2;
				// }
			}
		}
		cf.setConstantPool(infos);
		fis.close();
		File f = new File(filePath);
		ClassFileWriter.writeToFile(f, cf);
	}
}
