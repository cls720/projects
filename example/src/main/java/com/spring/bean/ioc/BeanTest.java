package com.spring.bean.ioc;

import java.util.List;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class BeanTest {
	public static void main(String[] args) {

		BeanFactory beanFactory = new ClassPathXmlApplicationContext(
				"bizkind_bean.xml");
		VxBizModel vxModel = (VxBizModel) beanFactory.getBean("vx",
				VxBizModel.class);
		vxModel.print();
		System.out.println(vxModel.getBizKind());
		System.out.println(vxModel.getPropString());
		System.out.println(vxModel.getPropInt());
		System.out.println(vxModel.getPropDate());
		System.out.println(vxModel.getPropRefObject());
		System.out.println(vxModel.getPropListString().toString());
		System.out.println(vxModel.getPropListObject().toString());
		System.out.println(vxModel.getPropArray());
		System.out.println(vxModel.getPropSetString());
		System.out.println(vxModel.getPropMapString());
		System.out.println(vxModel.getPropMapObject());
		System.out.println(vxModel.getPropProperties());
		List<KeyList> kl = vxModel.getPropKeyList();
		for (KeyList keyList : kl) {
			System.out.println(keyList.getKey() + ","
					+ keyList.getList().toArray());
		}

		System.out.println(vxModel.getSingleInject());
		System.out.println(vxModel.getSingleInject());
		System.out.println(vxModel.getMultiInject());
		System.out.println(vxModel.getMultiInject());
		System.out.println("------------------------------------------");
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"classpath:bizkind_bean.xml");
		VxBizModel vxModel2 = (VxBizModel)ctx.getBean("vx");
		System.out.println(vxModel2.getSingleInject());
		System.out.println(vxModel2.getSingleInject());
		System.out.println(vxModel2.getMultiInject());
		System.out.println(vxModel2.getMultiInject());
	}
}
