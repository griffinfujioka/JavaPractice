dataSource {
    pooled = true
    jmxExport = true
    driverClassName = "org.h2.Driver"
    username = "sa"
    password = ""
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = false
//    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory' // Hibernate 3
    cache.region.factory_class = 'org.hibernate.cache.ehcache.EhCacheRegionFactory' // Hibernate 4
    singleSession = true // configure OSIV singleSession mode
    flush.mode = 'manual' // OSIV session flush mode outside of transactional context
}

// environment specific settings
environments {
    development {
        dataSource {
            dbCreate = "create-drop" // one of 'create', 'create-drop', 'update', 'validate', ''
            url = "jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE"
			dataSource.dialect = com.fish.ImprovedH2Dialect
        }
    }
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:h2:mem:testDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE"
        }
    }
    production {
        dataSource {
			username= "griffinfujioka"
			password= "Belle32"
			pooled= true
            dbCreate = "update"		
			driverClassName = "com.mysql.jdbc.Driver"
            url = "jdbc:mysql://aaevybz8063dzk.cqot1wikgmd5.us-east-1.rds.amazonaws.com:3306/ebdb?user=griffinfujioka&password=Belle32"
			dialect = org.hibernate.dialect.MySQL5InnoDBDialect
            properties {
               // See http://grails.org/doc/latest/guide/conf.html#dataSource for documentation
               validationQuery = "SELECT 1"
			  testOnBorrow = true
			  testOnReturn = true
			  testWhileIdle = true
			  timeBetweenEvictionRunsMillis = 1800000
			  numTestsPerEvictionRun = 3
			  minEvictableIdleTimeMillis = 1800000
            }
        }
    }
}
