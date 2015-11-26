<!DOCTYPE html>
<html>
  <head>
    <title>Aquaria Automatica</title>
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    <link rel="import" href="bower_components/font-roboto/roboto.html">
    <link rel="import" href="storage/styles/styles.html">
    <link rel="import" href="bower_components/paper-card/paper-card.html">
    <link rel="import" href="bower_components/paper-tabs/paper-tabs.html">
    <link rel="import" href="bower_components/paper-toggle-button/paper-toggle-button.html">
    <link rel="import" href="bower_components/neon-animation/neon-animated-pages.html">
    <link rel="import" href="bower_components/neon-animation/neon-animatable.html">
    <link rel="import" href="bower_components/neon-animation/neon-animations.html">
    <link rel="import" href="bower_components/iron-flex-layout/iron-flex-layout.html">
    <link rel="import" href="bower_components/paper-slider/paper-slider.html">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  </head>
  <body unresolved class="fullbleed">
    <div id="wrapper" unresolved>
      <paper-tabs id="menu" selected="0">
        <paper-tab>Arduino</paper-tab>
        <paper-tab>KAKU</paper-tab>
      </paper-tabs>
      <div id="content">
        <neon-animated-pages selected="0" entry-animation="slide-from-right-animation" exit-animation="slide-left-animation" id="pages">
          <neon-animatable class="layout center-justified horizontal">
            <div class="animatable_content">
              <paper-card heading="Bedieningspaneel Aquarium">
                <div class="card-content">
                  <div class="layout horizontal center-justified">
                    <div class="layout vertical">
                      <paper-toggle-button>Zuurstof</paper-toggle-button>
                      <paper-toggle-button>Licht</paper-toggle-button>
                    </div>
                  </div>
                </div>
              </paper-card>
            </div>
          </neon-animatable>
          <neon-animatable class="layout center-justified horizontal">
            <div class="animatable_content">
              <paper-card heading="Bedieningspaneel Aquarium">
                <div class="card-content">
                  <div class="layout horizontal center-justified">
                    <div class="layout vertical">
                      <div>Temperatuur</div>
                      <paper-slider id="temperature" pin min="0" max="50" secondary-progress="40" editable></paper-slider>
                      <paper-toggle-button>Filter</paper-toggle-button>
                    </div>
                  </div>
                </div>
              </paper-card>
            </div>
          </neon-animatable>
        </neon-animated-pages>
      </div>
    </div>
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="storage/scripts/pageSelector.js"></script>
  </body>
</html>