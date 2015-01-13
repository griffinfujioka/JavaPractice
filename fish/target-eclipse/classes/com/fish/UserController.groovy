package com.fish

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_USER'])
class UserController extends grails.plugin.springsecurity.ui.UserController {
}
