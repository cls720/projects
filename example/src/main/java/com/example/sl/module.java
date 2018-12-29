package com.example.sl;

import com.fasterxml.jackson.databind.ObjectMapper;
import jodd.http.HttpRequest;
import jodd.http.HttpResponse;
import jodd.json.JsonSerializer;
import sun.misc.BASE64Encoder;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zhang yufei on 2018/7/3.
 */
public class module {

    //主机厂平台地址
    public static String ip1 = "http://127.0.0.1:8993";   //http://61.162.190.60:2080
    //主机厂调用接口令牌
    public static String vehicle_token="C3kNIVJWfOxLkRDydrJXsA4ff6oMaTOP";
    //主机厂调用接口密钥
    public static String vehicle_key="U2TohGfvuck0v5Xa";
    //电池厂调用接口令牌
    public static String factory_token="pOAJJSBmAThb8kPJh4VAX+zs/YAHFqxd";
    //电池厂调用接口密钥b
    public static String factory_key="vAREamtPvwanVe2M";

    public static void main(String args[]) {
        long start = System.currentTimeMillis();

        //1.主机厂车辆生产
        //createVehiclePack();
        //2.电池厂电池生产   *
        //createBatteryPack();
        //3.主机厂车辆销售
        //createSale();
        //4.电池厂售后     *
        //createReplaceBattery();
        //5.主机厂维修
        //createReplaceRecord();
        //6.电池厂维修      *
        //createFactoryRepair();
        //7.主机厂回收网点入库
        //createRecoverStorage();
        //8.主机厂回收网点退役
        //createRetireVehicle();
        //9.主机厂车辆换电入库
        //createReplaceBatteryInStorage();
        //10.主机厂车辆换电记录
        //createReplaceReplacement();
        //11.主机厂车辆换电维修
        //createReplaceRepair();
        //12.主机厂车辆换电退役
        //createReplaceRetire();
        //13.电池厂电池退役     *
        //createRetireFactory();
        //14.上传vin
        //replaceVehicle();
        //15.主机厂车辆换电出库
        //replaceBatteryOut();




        test();

        long end = System.currentTimeMillis();
        System.out.println("完成" + (end - start));
    }

    public static void createVehiclePack(){
        //电池包数据集
        List<String> packList=new ArrayList<String>();
        packList.add("P100");
        //车辆电池数据
        Map<String,Object> vinMap=new HashMap<String,Object>();
        vinMap.put("vin","LNBSCB3F0DD130955");
        vinMap.put("vehModelName","1111");
        vinMap.put("packCodeList",packList);
        vinMap.put("systemCode","S001");
        vinMap.put("vehicleType","1");
        vinMap.put("offlineProductionTime","2018-01-01 00:00:00");
        vinMap.put("vehicleBrand","宝马");
        vinMap.put("vehicleName","测试车");
        List<Map<String,Object>> vinList=new ArrayList<Map<String,Object>>();
        vinList.add(vinMap);
        Map<String,Object> vehicleMap=new HashMap<String,Object>();
        vehicleMap.put("vinList",vinList);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/vehicle/receiveVehicleProduce", vehicleMap, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createBatteryPack(){
        //电池单体数据集
        List<String> cellList1=new ArrayList<String>();
        cellList1.add("C111");
        //moduleList数据集
        Map<String,Object> module1=new HashMap<String,Object>();
        module1.put("code","M110");
        module1.put("cellList",cellList1);
        module1.put("modelId","11模块");
        module1.put("cellModelId","1102DT");
        //电池模组数据集
        List<Map<String,Object>> moduleList1=new ArrayList<Map<String,Object>>();
        moduleList1.add(module1);
        //requestMsg数据集
        Map<String,Object> pack1=new HashMap<String,Object>();
        pack1.put("code","P100");
        pack1.put("moduleList",moduleList1);
        pack1.put("serial","1");
        pack1.put("modelId","11号包");
        pack1.put("systemId","S001");
        pack1.put("systemModelId","zhangS");
        pack1.put("orderNo","20180908");
        List<Map<String,Object>> packList=new ArrayList<Map<String,Object>>();
        packList.add(pack1);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/vehicle/receiveBatteryProduce", packList, factory_token, factory_key);
        String result = parsToMap(response, factory_key);
        System.out.println(result);
    }

    public static void createSale(){
        List<Map<String,Object>> vehicleList=new ArrayList<Map<String,Object>>();
        Map<String,Object> vehicle=new HashMap<String,Object>();
        vehicle.put("vin", "LNBSCB3F0DD130955");
        vehicle.put("licensePlate", "京BZ0411");
        vehicle.put("vehTypeName", "111808");
        vehicle.put("saleTime", "2018-01-05");
        vehicle.put("saleArea", "北京市昌平区");
        vehicle.put("ownerName", "张三");
        vehicle.put("Idnum","150204197111111810");
//        vehicle.put("epname", "吉利汽车");
//        vehicle.put("epaddress", "北京市");
//        vehicle.put("epcode", "123456789123456789");
        vehicleList.add(vehicle);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/receiveSaleVehicle", vehicleList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createReplaceBattery(){
        //电池单体
        Map<String,Object> cell1=new HashMap<String,Object>();
        cell1.put("code","C211");
        cell1.put("type","C");
        List<Map<String,Object>> cellList1=new ArrayList<Map<String,Object>>();
        cellList1.add(cell1);
        //电池模块
        Map<String,Object> module1=new HashMap<String,Object>();
        module1.put("code","M210");
        module1.put("childCodeList",cellList1);
        module1.put("modelId","11模块");
        module1.put("type","M");
        List<Map<String,Object>> moduleList1=new ArrayList<Map<String,Object>>();
        moduleList1.add(module1);
        //电池包
        Map<String,Object> pack1=new HashMap<String,Object>();
        pack1.put("code","P200");
        pack1.put("childCodeList",moduleList1);
        pack1.put("modelId","11号包");
        pack1.put("type","P");
        pack1.put("orderCode","20180908");

        List<Map<String,Object>> packList=new ArrayList<Map<String,Object>>();
        packList.add(pack1);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveReplaceBattery", packList, factory_token, factory_key);
        String result = parsToMap(response, factory_key);
        System.out.println(result);
    }

    public static void createReplaceRecord(){
        List<Map<String,Object>> recordList=new ArrayList<Map<String,Object>>();
        //车辆电池数据集
        Map<String,Object> record=new HashMap<String,Object>();
        record.put("vin", "LNBSCB3F0DD130955");
        record.put("replaceDate", "2018-01-06");
        record.put("oldCode", "P100");
        record.put("whereaboutsId", "123456789123456789");
        record.put("whereaboutsName", "维修厂");
        record.put("newCode", "P200");
        record.put("batterySpecies", "P");
        recordList.add(record);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveReplaceRecord", recordList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createFactoryRepair(){
        //电池单体
        Map<String,Object> cell1=new HashMap<String,Object>();
        cell1.put("code","C311");
        cell1.put("type","C");
        List<Map<String,Object>> cellList1=new ArrayList<Map<String,Object>>();
        cellList1.add(cell1);
        //电池模组
        Map<String,Object> module1=new HashMap<String,Object>();
        module1.put("code","M310");
        module1.put("childCodeList",cellList1);
        module1.put("type","M");
        List<Map<String,Object>> moduleList1=new ArrayList<Map<String,Object>>();
        moduleList1.add(module1);
        //电池包
        Map<String,Object> pack1=new HashMap<String,Object>();
        pack1.put("code","P300");
        pack1.put("childCodeList",moduleList1);
        pack1.put("type","P");
        pack1.put("orderCode","20180908");
        List<Map<String,Object>> repairList=new ArrayList<Map<String,Object>>();
//        //车辆电池数据集
        Map<String,Object> repair=new HashMap<String,Object>();
        repair.put("vin", "LNBSCB3F0DD130955");
        repair.put("replaceDate", "2018-01-05");
        repair.put("oldCode", "P100");
        repair.put("whereaboutsId", "123456789123456789");
        repair.put("whereaboutsName", "维修厂");
        repair.put("newCodeBean", pack1);
        repair.put("batterySpecies", "P");

        //模块
        //电池单体
//        Map<String,Object> cell2=new HashMap<String,Object>();
//        cell2.put("code","C311");
//        cell2.put("type","C");
//        List<Map<String,Object>> cellList2=new ArrayList<Map<String,Object>>();
//        cellList2.add(cell2);
//        //电池模组
//        Map<String,Object> module2=new HashMap<String,Object>();
//        module2.put("code","M310");
//        module2.put("childCodeList",cellList2);
//        module2.put("modelId","zhangM");
//        module2.put("type","M");
//        module2.put("orderCode","20180908");
//        List<Map<String,Object>> repairList=new ArrayList<Map<String,Object>>();
//        //车辆电池数据集
//        repair.put("vin", "LNBSCB3F0DD130955");
//        repair.put("replaceDate", "2018-01-05");
//        repair.put("oldCode", "P200");
//        repair.put("whereaboutsId", "123456789123456789");
//        repair.put("whereaboutsName", "维修厂");
//        repair.put("newCodeBean", module2);
//        repair.put("batterySpecies", "M");
        repairList.add(repair);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveReplaceOld", repairList, factory_token, factory_key);
        String result = parsToMap(response, factory_key);
        System.out.println(result);
    }

    public static void createRecoverStorage(){
        List<Map<String,Object>> recoverStorageList=new ArrayList<Map<String,Object>>();
        Map<String,Object> recoverStorage=new HashMap<String,Object>();
        recoverStorage.put("storageDate", "2018-01-02");
        recoverStorage.put("recoverUnitCode", "123456789123456789");
        recoverStorage.put("recoverUnitName", "维修厂");
        recoverStorage.put("code", "P500");
        recoverStorage.put("batterySpecies", "P");
        recoverStorageList.add(recoverStorage);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/recover/receiveRecoverStorage", recoverStorageList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createRetireVehicle(){
        List<Map<String,Object>> retireVehicleList=new ArrayList<Map<String,Object>>();
        Map<String,Object> retireVehicle=new HashMap<String,Object>();
        retireVehicle.put("code", "P500");
        retireVehicle.put("whereaboutsCode", "123456789123412341");
        retireVehicle.put("whereaboutsName", "维修厂");
        retireVehicle.put("retireDate", "2018-01-05");
        retireVehicle.put("batterySpecies", "P");
        retireVehicle.put("retireUnitCode", "123456789123123123");
        retireVehicle.put("retireUnitName", "退役厂");
        retireVehicle.put("factoryType", "5");
        retireVehicle.put("batteryType", "A");
        retireVehicle.put("batteryWeight","1.05");
        retireVehicleList.add(retireVehicle);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveRetiredOldVehicle", retireVehicleList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createReplaceBatteryInStorage(){
        List<String> cellList1=new ArrayList<String>();
        cellList1.add("C511");
        Map<String,Object> module1=new HashMap<String,Object>();
        module1.put("code","M510");
        module1.put("cellList",cellList1);
        module1.put("cellCodeSize","1");
        List<Map<String,Object>> moduleList1=new ArrayList<Map<String,Object>>();
        moduleList1.add(module1);
        Map<String,Object> pack1=new HashMap<String,Object>();
        pack1.put("code","P500");
        pack1.put("moduleList",moduleList1);
        pack1.put("replaceUnitCode","123456789123412342");
        pack1.put("replaceUnitName","换电厂商");

        List<String> cellList2=new ArrayList<String>();
        cellList2.add("C611");
        Map<String,Object> module2=new HashMap<String,Object>();
        module2.put("code","M610");
        module2.put("cellList",cellList2);
        module2.put("cellCodeSize","1");
        List<Map<String,Object>> moduleList2=new ArrayList<Map<String,Object>>();
        moduleList2.add(module2);
        Map<String,Object> pack2=new HashMap<String,Object>();
        pack2.put("code","P600");
        pack2.put("moduleList",moduleList2);
        pack2.put("replaceUnitCode","123456789123412342");
        pack2.put("replaceUnitName","换电厂");

        List<Map<String,Object>> packList=new ArrayList<Map<String,Object>>();
        packList.add(pack1);
        packList.add(pack2);

        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/replaceBattery/batteryInStorage", packList, vehicle_token, vehicle_key);
        String result = parsToMap(response, factory_key);
        System.out.println(result);
    }

    public static void createReplaceReplacement(){
        List<Map<String,Object>> recordList=new ArrayList<Map<String,Object>>();
        Map<String,Object> record=new HashMap<String,Object>();
        record.put("vin", "LNBSCB3F0CD120362");
        record.put("oldCode", "P600");
        record.put("newCode", "P500");
        record.put("replaceUnitCode","123456789123412342");
        record.put("replaceUnitName","换电厂商");
        record.put("replaceDate", "2018-01-05 12:23:00");
        recordList.add(record);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/replaceBattery/replacementBattery", recordList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createReplaceRepair(){
        Map<String,Object> cell1=new HashMap<String,Object>();
        cell1.put("code","C811");
        cell1.put("type","C");
        List<Map<String,Object>> cellList1=new ArrayList<Map<String,Object>>();
        cellList1.add(cell1);
        Map<String,Object> module1=new HashMap<String,Object>();
        module1.put("code","M810");
        module1.put("childCodeList",cellList1);
        module1.put("type","M");
        List<Map<String,Object>> moduleList1=new ArrayList<Map<String,Object>>();
        moduleList1.add(module1);
        Map<String,Object> pack1=new HashMap<String,Object>();
        pack1.put("code","M800");
        pack1.put("childCodeList",moduleList1);
        pack1.put("type","M");
        List<Map<String,Object>> repairList=new ArrayList<Map<String,Object>>();
        Map<String,Object> repair=new HashMap<String,Object>();
        repair.put("repaireNo", "LNBSCB3F0DD130955");
        repair.put("repairDate", "2018-01-05");
        repair.put("oldCode", "P500");
        repair.put("newCode", "P800");
        repair.put("newCodeBean", pack1);
        repair.put("replaceUnitCode", "123456789123412342");
        repair.put("replaceUnitName", "换电厂商");
        repair.put("whereaboutsCode", "123456789123412341");
        repair.put("whereaboutsName", "维修厂");
        repair.put("repaireNo","111111");
        repairList.add(repair);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/replaceBattery/replaceRepairBattery", repairList, vehicle_token, vehicle_key);
        String result = parsToMap(response, factory_key);
        System.out.println(result);
    }

    public static void createReplaceRetire(){
        List<Map<String,Object>> retireVehicleList=new ArrayList<Map<String,Object>>();
        Map<String,Object> retireVehicle=new HashMap<String,Object>();
        retireVehicle.put("code", "P1100");
        retireVehicle.put("whereaboutsCode", "123456789123412342");
        retireVehicle.put("whereaboutsName", "换电厂商");
        retireVehicle.put("retireDate", "2018-01-05");
        retireVehicle.put("batterySpecies", "P");
        retireVehicle.put("retireUnitCode", "123456789123123123");
        retireVehicle.put("retireUnitName", "退役厂商");
        retireVehicle.put("factoryType", "4");
        retireVehicle.put("batteryType", "A");
        retireVehicle.put("batteryWeight","1.05");
        retireVehicleList.add(retireVehicle);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveRetiredOldReplace", retireVehicleList, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void createRetireFactory(){
        List<Map<String,Object>> retireVehicleList=new ArrayList<Map<String,Object>>();
        Map<String,Object> retireVehicle=new HashMap<String,Object>();
        retireVehicle.put("code", "P500");
        retireVehicle.put("whereaboutsCode", "123456789123456789");
        retireVehicle.put("whereaboutsName", "电池厂商");
        retireVehicle.put("retireDate", "2018-01-05");
        retireVehicle.put("batterySpecies", "P");
        retireVehicle.put("retireUnitCode", "123456789123123123");
        retireVehicle.put("retireUnitName", "退役厂商");
        retireVehicle.put("factoryType", "2");
        retireVehicle.put("batteryType", "A");
        retireVehicle.put("batteryWeight","1.09");
        retireVehicleList.add(retireVehicle);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/sail/receiveRetiredOld", retireVehicleList, factory_token, factory_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    //上传vin
    public static void replaceVehicle(){
        List<Map<String,Object>> replaceVehicleVin = new ArrayList<Map<String,Object>>();
        Map<String,Object> vin = new HashMap<String,Object>();
        vin.put("vin","LNBSCB3F0DD130955");
        vin.put("replaceFactoryCode","123456789123123123");
        vin.put("replaceFactoryName","测试换电厂");
        replaceVehicleVin.add(vin);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/replaceBattery/replaceVehicle", replaceVehicleVin, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static void replaceBatteryOut(){
        List<Map<String,Object>> replaceVehicleVin = new ArrayList<Map<String,Object>>();
        Map<String,Object> vin = new HashMap<String,Object>();
        vin.put("repairDate","2018-01-01");
        vin.put("replaceUnitCode","123456789123123123");
        vin.put("replaceUnitName","测试换电厂");
        vin.put("oldCode","P600");
        vin.put("whereaboutsName","换电厂");
        vin.put("whereaboutsCode","123456789123412342");
        replaceVehicleVin.add(vin);
        HttpResponse response = send(ip1+"/bitnei/v1.0/battery/replaceBattery/ReplaceBatteryOut", replaceVehicleVin, vehicle_token, vehicle_key);
        String result = parsToMap(response, vehicle_key);
        System.out.println(result);
    }

    public static HttpResponse send(String url, Object data, String token, String key){
        try {
            Map<String, Object> requestMap = new HashMap<String, Object>();
            String requestMsg = new JsonSerializer().deep(true).serialize(data);
            String enStr = encrypt(requestMsg, key);
            requestMap.put("requestMsg", enStr);
            requestMap.put("timestamp", System.currentTimeMillis());
            String sign = byteArrayToHexString(encryptHMAC(enStr.getBytes(), key));
            requestMap.put("sign", sign);
            HttpResponse response = getRequest(url, token, requestMap).send().unzip().unzip();
            return response;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public static String parsToMap( HttpResponse response,String key){
        try {
            ObjectMapper mapper = new ObjectMapper();
            Map map = mapper.readValue(response.body(), Map.class);
            String result = "";
            if(isNotEmpty(map.get("data"))){
                result = decrypt(map.get("data").toString(), key);
            }else {
                result = decrypt(map.get("msg").toString(), key);
            }
            return "code:"+map.get("code")+""+result;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public static String encrypt(String content, String password) {
        try {
            if(isEmpty(content)) {
                return "";
            }
            KeyGenerator kgen = KeyGenerator.getInstance("AES");
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            kgen.init(128, secureRandom);
            SecretKey secretKey = kgen.generateKey();
            byte[] enCodeFormat = secretKey.getEncoded();
//            System.out.println(enCodeFormat);
            SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");
            BASE64Encoder coder = new BASE64Encoder();
            coder.encode(enCodeFormat);
//            System.out.println("coder.encode(enCodeFormat)  ==   "+coder.encode(enCodeFormat));
            Cipher cipher = Cipher.getInstance("AES");
            byte[] byteContent = content.getBytes("utf-8");
            cipher.init(1, key);
            byte[] result = cipher.doFinal(byteContent);
            String str = Base64.encode(result);
            return str;
        } catch (NoSuchAlgorithmException var13) {
            ;
        } catch (NoSuchPaddingException var14) {
            ;
        } catch (InvalidKeyException var15) {
            ;
        } catch (UnsupportedEncodingException var16) {
            ;
        } catch (IllegalBlockSizeException var17) {
            ;
        } catch (BadPaddingException var18) {
            ;
        }
        return null;
    }

    public static boolean isNotEmpty(Object o) {
        if (o == null) {
            return false;
        }
        if ("".equals(FilterNull(o.toString()))) {
            return false;
        } else {
            return true;
        }
    }

    public static String FilterNull(Object o) {
        return o != null && !"null".equals(o.toString()) ? o.toString().trim() : "" ;
    }

    public static String decrypt(String str, String password) {
        try {
            byte[] content = Base64.decode(str);
            KeyGenerator kgen = KeyGenerator.getInstance("AES");
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            kgen.init(128, secureRandom);
            SecretKey secretKey = kgen.generateKey();
            byte[] enCodeFormat = secretKey.getEncoded();
            SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(2, key);
            byte[] result = cipher.doFinal(content);
            return new String(result, "UTF-8");
        } catch (NoSuchAlgorithmException var10) {
            ;
        } catch (NoSuchPaddingException var11) {
            ;
        } catch (InvalidKeyException var12) {
            ;
        } catch (IllegalBlockSizeException var13) {
            ;
        } catch (BadPaddingException var14) {
            ;
        } catch (Exception var15) {
            ;
        }
        return "";
    }

    public static byte[] encryptHMAC(byte[] data, String key) throws Exception {
        SecretKey secretKey = new SecretKeySpec(key.getBytes(), "HmacMD5");
        Mac mac = Mac.getInstance(secretKey.getAlgorithm());
        mac.init(secretKey);
        return mac.doFinal(data);
    }

    public static String byteArrayToHexString(byte[] bytes) {
        StringBuilder sb = new StringBuilder(bytes.length * 2);
        byte[] var2 = bytes;
        int var3 = bytes.length;
        for(int var4 = 0; var4 < var3; ++var4) {
            byte aByte = var2[var4];
            int v = aByte & 255;
            if(v < 16) {
                sb.append('0');
            }
            sb.append(Integer.toHexString(v));
        }
        return sb.toString();
    }

    public static HttpRequest getRequest(String url, String accessToken, Map<String, Object> params) {
        HttpRequest request = HttpRequest.post(url);
        request.header("Authorization", "Bearer " + accessToken);
        request.header("Content-Type", "application/json; charset=utf-8");
        request.acceptEncoding("gzip");
        request.body((new JsonSerializer()).serialize(params));
        return request;
    }

    public static boolean isEmpty(Object o) {
        if (o == null) {
            return true;
        }
        if ("".equals(FilterNull(o.toString()))) {
            return true;
        } else {
            return false;
        }
    }


    public static void test() {
        try {
            String data = "";
            String url = "";
            String token = "";
            String key = "";

            Map<String, Object> requestMap = new HashMap<String, Object>();
            String enStr = encrypt(data, key);
            requestMap.put("requestMsg", enStr);
            requestMap.put("timestamp", System.currentTimeMillis());
            String sign = byteArrayToHexString(encryptHMAC(enStr.getBytes(), key));
            requestMap.put("sign", sign);
            HttpResponse response = getRequest(url, token, requestMap).send().unzip().unzip();
            ObjectMapper mapper = new ObjectMapper();
            Map map = mapper.readValue(response.body(), Map.class);
            String result="";
            if (isNotEmpty(map.get("data"))) {
                result = decrypt(map.get("data").toString(), key);
            } else {
                result = decrypt(map.get("msg").toString(), key);
            }
            System.out.println(map.get("code") + "" + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
