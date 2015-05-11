<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="viewport" content="width=device-width, user-scalable=1">
  <title>Technews</title>

  <!--STYLES-->
  <link rel="stylesheet" href="./frontend/dist/stylesheets/main.css">
  <!--STYLES END-->
</head>
<body>

<?php include 'components/navbar.php'; ?>

<div class="container-fluid">

  <div class="row no-gutters">
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><img class="panel-heading-icon" src="frontend/dist/images/cal_icon.png" alt=""/>Latest News</h3>
        </div>
        <!-- /.panel-heading -->
        <?php include('components/media.php'); ?>
      </div>
      <!-- /.panel -->
    </div>
    <!-- /.col-xs-12 col-sm-4 col-md-4 col-lg-4 -->
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <?php include('components/featured-panels.php') ?>
    </div>
    <!-- /.col-xs-12 col-sm-4 col-md-4 col-lg-4 -->
    <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><img class="panel-heading-icon" src="frontend/dist/images/thumb_icon.png" alt=""/>Popular</h3>
        </div>
        <!-- /.panel-heading -->
        <?php include('components/popular-panels.php') ?>
      </div>
      <!-- /.panel -->
    </div>
    <!-- /.col-xs-12 col-sm-5 col-md-5 col-lg-5 -->
  </div>
  <!-- /.row -->
</div>
<!-- /.container-fluid -->



<!--SCRIPTS-->
<script src="./frontend/assets/javascripts/dependencies/jquery/jquery-1.11.2.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/_a_tooltip.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/affix.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/alert.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/button.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/carousel.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/collapse.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/dropdown.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/modal.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/popover.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/scrollspy.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/tab.js"></script>
<script src="./frontend/assets/javascripts/vendor/bootstrap/transition.js"></script>
<script src="./frontend/assets/javascripts/bundle/filter.js"></script>
<script src="./frontend/assets/javascripts/main.js"></script>
<!--SCRIPTS END-->
</body>
</html>