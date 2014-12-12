import com.fish.Role
import com.fish.User
import com.fish.UserRole

class BootStrap {

    def init = { servletContext ->
		def adminRole = new Role(authority: 'ROLE_ADMIN').save(flush: true)
		def userRole = new Role(authority: 'ROLE_USER').save(flush: true)
		
		def testUser = new User(username: 'griffin', password: 'redr32')
		testUser.save(flush: true)
		UserRole.create testUser, adminRole, true
    }
	
    def destroy = {
    }
}
