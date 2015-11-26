<!DOCTYPE html>
<html>
  <head>
    <title>Aquaria Automatica</title>
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">
    <link rel="import" href="storage/styles/styles.html">
    <link rel="import" href="bower_components/polymer/polymer.html">
    <link rel="import" href="bower_components/paper-card/paper-card.html">
    <link rel="import" href="bower_components/paper-tabs/paper-tabs.html">
    <link rel="import" href="bower_components/paper-toggle-button/paper-toggle-button.html">
    <link rel="import" href="bower_components/iron-pages/iron-pages.html">
    <link rel="import" href="bower_components/iron-flex-layout/iron-flex-layout.html">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  </head>
  <body>
    <paper-tabs id="menu" selected="0">
      <paper-tab>Arduino</paper-tab>
      <paper-tab>KAKU</paper-tab>
    </paper-tabs>
    <div id="content" class="layout horizontal wrap center-justified">
      <paper-card heading="Bedieningspaneel Aquarium">
        <div class="card-content">
          <iron-pages id="pages" selected="0">
            <div class="page-arduino layout horizontal center-justified">
              <div class="layout vertical">
                <paper-toggle-button>Zuurstof</paper-toggle-button>
                <paper-toggle-button>Licht</paper-toggle-button>
              </div>
            </div>
            <div class="page-kaku layout horizontal center-justified">
              <div class="layout vertical">
                <p>KAKU</p>
              </div>
            </div>
          </iron-pages>
        </div>
      </paper-card>
    </div>
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="storage/scripts/pageSelector.js"></script>
  </body>
</html>