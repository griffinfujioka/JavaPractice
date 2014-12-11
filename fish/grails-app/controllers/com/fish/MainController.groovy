package com.fish

import grails.plugin.springsecurity.annotation.Secured

class MainController {
	
	@Secured(['ROLE_ADMIN'])
   def index() {
      render 'Secure access only'
   }
}
