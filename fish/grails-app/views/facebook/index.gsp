<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Welcome to Fish</title>
		<style type="text/css" media="screen">
			#status {
				background-color: #eee;
				border: .2em solid #fff;
				margin: 2em 2em 1em;
				padding: 1em;
				width: 12em;
				float: left;
				-moz-box-shadow: 0px 0px 1.25em #ccc;
				-webkit-box-shadow: 0px 0px 1.25em #ccc;
				box-shadow: 0px 0px 1.25em #ccc;
				-moz-border-radius: 0.6em;
				-webkit-border-radius: 0.6em;
				border-radius: 0.6em;
			}

			.ie6 #status {
				display: inline; /* float double margin fix http://www.positioniseverything.net/explorer/doubled-margin.html */
			}

			#status ul {
				font-size: 0.9em;
				list-style-type: none;
				margin-bottom: 0.6em;
				padding: 0;
			}

			#status li {
				line-height: 1.3;
			}

			#status h1 {
				text-transform: uppercase;
				font-size: 1.1em;
				margin: 0 0 0.3em;
			}

			#page-body {
				margin: 2em 1em 1.25em 18em;
			}

			h2 {
				margin-top: 1em;
				margin-bottom: 0.3em;
				font-size: 1em;
			}

			p {
				line-height: 1.5;
				margin: 0.25em 0;
			}

			#controller-list ul {
				list-style-position: inside;
			}

			#controller-list li {
				line-height: 1.3;
				list-style-position: inside;
				margin: 0.25em 0;
			}

			@media screen and (max-width: 480px) {
				#status {
					display: none;
				}

				#page-body {
					margin: 0 1em 1em;
				}

				#page-body h1 {
					margin-top: 0;
				}
			}
		</style>
	</head>
	<body>
		<div>
			<sec:ifNotGranted roles="ROLE_USER">
			  <facebookAuth:connect />
			</sec:ifNotGranted>
			<sec:ifAllGranted roles="ROLE_USER">
			  Welcome <sec:username/>! (<g:link uri="/j_spring_security_logout">Logout</g:link>)
			  <g:set var="photo"  value="${sec.loggedInUserInfo([field:'photo'])}"/>
				<g:set var="userId"  value="${sec.loggedInUserInfo([field:'id'])}"/>
				
				<g:if test="${photo != null  && !(photo.empty)}" >
				    <g:link controller="userAccount" action="myInfo" id="${userId}">
				        <img id="profile_photo" src="${createLink(controller:'image', action:'profilePhoto', id:photo, params:[maxWidth:190.0,maxHeight:190.0])}" alt="${photo}" />
				    </g:link>
				</g:if>
				<g:else>
				    <g:link controller="userAccount" action="myInfo" id="${id}">
				        <img id="profile_photo" src="${resource(dir:'images', file:'no_image_blue.gif')}" alt="No Image" width="200" height="200"/>
				    </g:link>  
				</g:else>
			</sec:ifAllGranted>
		</div>
	</body>
</html>
