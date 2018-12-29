package com.spring.bean.ioc;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public  class VxBizModel {
	String bizKind;
	String propString;
	Integer propInt;
	Date propDate;
	Date propRefObject;
	List<String> propListString;
	List<Date> propListObject;
	String[][] propArray;
	Set<String> propSetString;
	Map<String, String> propMapString;
	Map<String, Object> propMapObject;
	Properties propProperties;
	List<KeyList> propKeyList;
	// 单例注入
	KeyList singleInject;
	// 多例注入，每次获取不同对象
	KeyList multiInject;

	public VxBizModel() {
		// TODO Auto-generated constructor stub
	}

	public VxBizModel(String kind) {
		this.bizKind = kind;
	}

	public String getBizKind() {
		return bizKind;
	}

	public void print() {
		System.out.println("Hello VxBizModel!");
	}

	public String getPropString() {
		return propString;
	}

	public void setPropString(String propString) {
		this.propString = propString;
	}

	public Integer getPropInt() {
		return propInt;
	}

	public void setPropInt(Integer propInt) {
		this.propInt = propInt;
	}

	public Date getPropDate() {
		return propDate;
	}

	public void setPropDate(Date propDate) {
		this.propDate = propDate;
	}

	public Date getPropRefObject() {
		return propRefObject;
	}

	public void setPropRefObject(Date propRefObject) {
		this.propRefObject = propRefObject;
	}

	public List<String> getPropListString() {
		return propListString;
	}

	public void setPropListString(List<String> propListString) {
		this.propListString = propListString;
	}

	public List<Date> getPropListObject() {
		return propListObject;
	}

	public void setPropListObject(List<Date> propListObject) {
		this.propListObject = propListObject;
	}

	public String[][] getPropArray() {
		return propArray;
	}

	public void setPropArray(String[][] propArray) {
		this.propArray = propArray;
	}

	public Set<String> getPropSetString() {
		return propSetString;
	}

	public void setPropSetString(Set<String> propSetString) {
		this.propSetString = propSetString;
	}

	public Map<String, String> getPropMapString() {
		return propMapString;
	}

	public void setPropMapString(Map<String, String> propMapString) {
		this.propMapString = propMapString;
	}

	public Map<String, Object> getPropMapObject() {
		return propMapObject;
	}

	public void setPropMapObject(Map<String, Object> propMapObject) {
		this.propMapObject = propMapObject;
	}

	public Properties getPropProperties() {
		return propProperties;
	}

	public void setPropProperties(Properties propProperties) {
		this.propProperties = propProperties;
	}

	public List<KeyList> getPropKeyList() {
		return propKeyList;
	}

	public void setPropKeyList(List<KeyList> propKeyList) {
		this.propKeyList = propKeyList;
	}

	public KeyList getSingleInject() {
		return singleInject;
	}

	public void setSingleInject(KeyList singleInject) {
		this.singleInject = singleInject;
	}

	public  KeyList getMultiInject(){
		return multiInject;
	};

	
}
