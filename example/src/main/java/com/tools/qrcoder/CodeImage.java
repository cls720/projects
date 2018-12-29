package com.tools.qrcoder;

import java.awt.image.BufferedImage;

import jp.sourceforge.qrcode.data.QRCodeImage;

public class CodeImage implements QRCodeImage {
	BufferedImage bufImage;

	public CodeImage(BufferedImage bufferedImage) {
		this.bufImage = bufferedImage;
	}

	public int getHeight() {
		return bufImage.getHeight();
	}

	public int getPixel(int x, int y) {
		return bufImage.getRGB(x, y);
	}

	public int getWidth() {
		return bufImage.getWidth();
	}

}
