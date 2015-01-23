<!DOCTYPE html>
<html ng-app='feedModule'>
<head>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular-resource.min.js"></script>
</head>
 
<body ng-controller='FeedCtrl'>
 
<div ng-repeat="feed in feeds | orderBy:'title'">
	<h2><a href="{{feed.link}}" target="_blank">{{feed.title}}</a></h2>
	<p><span ng-repeat="item in feed.entries">
		<a href="{{item.link}}" target="_blank">{{item.title}}</a> (<span>{{item.publishedDate | date:'d-MM-yyyy HH:mm'}}</span>)<br />
	</span></p>
</div>
 
<script src="js/feeds.js"></script>
	
</body>
</html>

<%--<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Yahoo! Sports Reader">
	<meta name="author" content="Griffin Fujioka">
	
	<title>Yahoo! Sports Reader</title>
	
	<!-- css -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link href="css/style.css" rel="stylesheet">
	
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular-resource.min.js"></script>

</head>

<body id="page-top" data-spy="scroll" ng-controller='FeedCtrl' >

	<!-- Navigation -->
	<div class="row-fluid">
		<ul class="nav nav-pills">
		    <li class="active"><a href="#"><span class="glyphicon glyphicon-education"></span>  News</a></li>
		    <li><a href="#"><span class="glyphicon glyphicon-headphones"></span> Entertainment</a></li>
		    <li><a href="#"><span class="glyphicon glyphicon-stats"></span> Tech News</a></li>
		</ul>
	</div>
	<!-- /Navigation -->
	
	<!-- Content -->
	 <div class="row-fluid">
        <form>
            <div class="input-prepend span12">
          <div class="btn-group">
            <button class="btn btn-info" type="button" tabindex="-1">{{loadButonText}}</button>
            <button class="btn btn-info dropdown-toggle" data-toggle="dropdown" tabindex="-1">
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#" ng-click="feedSrc='http://rss.cnn.com/rss/cnn_topstories.rss';loadFeed($event);">CNN</a></li>
              <li><a href="#" ng-click="feedSrc='http://news.ycombinator.com/rss';loadFeed($event)">Hacker News</a></li>
              <li><a href="#" ng-click="feedSrc='http://feeds2.feedburner.com/Mashable';loadFeed($event)">Mashable</a></li>                  
              <li><a href="#" ng-click="feedSrc='http://feeds.huffingtonpost.com/huffingtonpost/raw_feed';loadFeed($event)">Huffington Post</a></li>
              <li><a href="#" ng-click="feedSrc='http://feeds.feedburner.com/TechCrunch';loadFeed($event)">TechCrunch</a></li>
            </ul>
          </div>
                <input type="text" class="span10" autocomplete="off" placeholder="Enter Feed URL" data-ng-model="feedSrc" />
        </div>
           <div class="input-prepend" ng-show="feeds.length > 0">
          <span class="add-on"><i class="icon-search"></i></span>
               <input class="span12" type="text" placeholder="Search" data-ng-model="filterText" />
           </div>
        </form>
    </div>
	<div class="row-fluid">
            <ul class="unstyled">
                <span class="badge badge-warning" ng-show="feeds.length > 0">
                	{{(feeds | filter:filterText).length}} Items
                </span>
                <li ng-repeat="feed in feeds | filter:filterText">                    
                    <h5><a href="{{feed.link}}">{{feed.title}}</a></h5>                                        
                    <p class="text-left">{{feed.contentSnippet}}</p>                    
                    <span class="small">{{feed.publishedDate}}</span>
                </li>                
            </ul>            
        </div>
	<!-- /Content -->


	<!-- Footer -->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<ul class="footer-menu">
						<li><a href="#">Back to Top</a></li>
					</ul>
				</div>
				<div class="col-md-6 text-right">
					<p>&copy;Copyright 2015 - Me.</p>
				</div>
			</div>
		</div>
	</footer>
	<!-- /Footer -->

	<!-- Core JavaScript Files -->
	<script src="js/jquery.min.js"></script>
	<script
		src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="js/jquery.sticky.js"></script>
	<script src="js/jquery.easing.min.js"></script>
	<script src="js/jquery.scrollTo.js"></script>
	<script src="js/jquery.appear.js"></script>
	<script src="js/stellar.js"></script>
	<script src="js/nivo-lightbox.min.js"></script>

	<script src="js/custom.js"></script>
	<script src="js/css3-animate-it.js"></script>
	<script src="js/YahooNewsReader.js"></script>
	<script src="js/feeds.js"></script>

</body>

</html>
--%>