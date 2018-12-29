package com.qrcode.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.tools.qrcoder.QrCodeTool;

@Controller
public class QrCodeController {

	@RequestMapping("qrcode")
	public String qrCode() {
		return "qrcode/qrcode";
	}

	@RequestMapping("createQrImg")
	public ModelAndView createQrImg(String content, String type) {
		Map<String, Object> myModel = new HashMap<String, Object>();
		myModel.put("content", content);
		myModel.put("type", type);
		return new ModelAndView("qrcode/qrcode", "model", myModel);
	}

	@RequestMapping("qrCodeImgUrl")
	public void qrCodeImgUrl(HttpServletResponse response, String content,
			String type)throws  IOException  {
		QrCodeTool.getInstance().encoderQRCode(content, response.getOutputStream(), type, 7);

	}

}
