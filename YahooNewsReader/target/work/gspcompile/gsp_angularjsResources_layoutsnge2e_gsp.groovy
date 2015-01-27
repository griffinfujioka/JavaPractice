import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

@GrailsPlugin(name='angularjs-resources', version='1.3.8')
class gsp_angularjsResources_layoutsnge2e_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/plugins/angularjs-resources-1.3.8/grails-app/views/layouts/nge2e.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
createTagBody(2, {->
createClosureForHtmlPart(2, 3)
invokeTag('captureTitle','sitemesh',4,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',4,[:],2)
printHtmlPart(1)
invokeTag('require','r',5,['module':("angular-scenario")],-1)
printHtmlPart(1)
invokeTag('layoutHead','g',6,[:],-1)
printHtmlPart(1)
invokeTag('layoutResources','r',7,[:],-1)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',8,[:],1)
printHtmlPart(3)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('layoutBody','g',10,[:],-1)
printHtmlPart(1)
invokeTag('layoutResources','r',11,[:],-1)
printHtmlPart(3)
})
invokeTag('captureBody','sitemesh',12,[:],1)
printHtmlPart(4)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1370308884000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
