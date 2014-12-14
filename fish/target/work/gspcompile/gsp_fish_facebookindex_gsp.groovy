import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_fish_facebookindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/facebook/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("main")],-1)
printHtmlPart(1)
createTagBody(2, {->
createClosureForHtmlPart(2, 3)
invokeTag('captureTitle','sitemesh',5,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',5,[:],2)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',82,[:],1)
printHtmlPart(4)
createTagBody(1, {->
printHtmlPart(5)
createTagBody(2, {->
printHtmlPart(6)
invokeTag('connect','facebookAuth',86,[:],-1)
printHtmlPart(7)
})
invokeTag('ifNotGranted','sec',87,['roles':("ROLE_USER")],2)
printHtmlPart(7)
createTagBody(2, {->
printHtmlPart(8)
invokeTag('username','sec',89,[:],-1)
printHtmlPart(9)
createClosureForHtmlPart(10, 3)
invokeTag('link','g',89,['uri':("/j_spring_security_logout")],3)
printHtmlPart(11)
invokeTag('set','g',90,['var':("photo"),'value':(sec.loggedInUserInfo([field:'photo']))],-1)
printHtmlPart(12)
invokeTag('set','g',91,['var':("userId"),'value':(sec.loggedInUserInfo([field:'id']))],-1)
printHtmlPart(13)
if(true && (photo != null  && !(photo.empty))) {
printHtmlPart(14)
createTagBody(4, {->
printHtmlPart(15)
expressionOut.print(createLink(controller:'image', action:'profilePhoto', id:photo, params:[maxWidth:190.0,maxHeight:190.0]))
printHtmlPart(16)
expressionOut.print(photo)
printHtmlPart(17)
})
invokeTag('link','g',96,['controller':("userAccount"),'action':("myInfo"),'id':(userId)],4)
printHtmlPart(12)
}
else {
printHtmlPart(14)
createTagBody(4, {->
printHtmlPart(15)
expressionOut.print(resource(dir:'images', file:'no_image_blue.gif'))
printHtmlPart(18)
})
invokeTag('link','g',101,['controller':("userAccount"),'action':("myInfo"),'id':(id)],4)
printHtmlPart(19)
}
printHtmlPart(7)
})
invokeTag('ifAllGranted','sec',103,['roles':("ROLE_USER")],2)
printHtmlPart(20)
})
invokeTag('captureBody','sitemesh',105,[:],1)
printHtmlPart(21)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1418373825000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
