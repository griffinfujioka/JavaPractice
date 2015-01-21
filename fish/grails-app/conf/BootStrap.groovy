import com.fish.FacebookUser
import com.fish.Role
import com.fish.User
import com.fish.UserRole

class BootStrap {

    def init = { servletContext ->
		def adminRole = new Role(authority: 'ROLE_ADMIN').save(flush: true)
		def userRole = new Role(authority: 'ROLE_USER').save(flush: true)

//		def admin = new User(username: 'admin', password: 'admin')
//		admin.save(flush: true)
//		UserRole.create admin, adminRole, true
//		UserRole.create(admin, Role.findByAuthority('ROLE_FACEBOOK'))
//		FacebookUser fbUser = new FacebookUser(
//				uid: token.uid,
//				accessToken: token.accessToken.accessToken,
//				accessTokenExpires: token.accessToken.expireAt,
//				user: person
//		)
//		fbUser.save()
    }
	
    def destroy = {
    }
}
