package com.spring.step.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.spring.step.domain.Account;
import com.spring.step.service.BankService;

@Controller
public class AccountsController {

	@Autowired
	private BankService bankService;

	@RequestMapping("listAccounts")
	public ModelAndView listAccounts(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		// Security check (this is unnecessary if Spring Security is performing
		// the authorization)
		// if (request.getUserPrincipal() == null) {
		// throw new
		// AuthenticationCredentialsNotFoundException("You must login to view the account list (Spring Security message)");
		// // only for Spring Security managed authentication
		// }

		// Actual business logic
		ModelAndView mav = new ModelAndView("step/listAccounts");
		mav.addObject("accounts", bankService.findAccounts());
		return mav;
	}
	
	@RequestMapping("post")
    public ModelAndView postAccount(HttpServletRequest request, HttpServletResponse response) throws Exception {
        // Security check (this is unnecessary if Spring Security is performing the authorization)
//        if (!request.isUserInRole("ROLE_TELLER")) {
//            throw new AccessDeniedException("You must be a teller to post transactions (Spring Security message)");
//        }

        // Actual business logic
        Long id = ServletRequestUtils.getRequiredLongParameter(request, "id");
        Double amount = ServletRequestUtils.getRequiredDoubleParameter(request, "amount");
        Account a = bankService.readAccount(id);
        bankService.post(a, amount);

        return new ModelAndView("redirect:listAccounts.do");
    }
}
