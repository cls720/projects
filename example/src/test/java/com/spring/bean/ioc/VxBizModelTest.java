package com.spring.bean.ioc;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class VxBizModelTest {
	
	@Test
	public void testVxBean() throws Exception{
		ApplicationContext ctx = new ClassPathXmlApplicationContext( "bizkind_bean.xml" );
        VxBizModel vxModel = (VxBizModel) ctx.getBean( "vx" );
        vxModel.print();
        Assert.assertEquals("vx", vxModel.getBizKind());
	}
}
