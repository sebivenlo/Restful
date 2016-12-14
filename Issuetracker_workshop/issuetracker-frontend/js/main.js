/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.4.0',
    'jquery': 'libs/jquery/jquery-3.1.0.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0.min',
    'ojs': 'libs/oj/v2.2.0/min',
    'ojL10n': 'libs/oj/v2.2.0/ojL10n',
    'ojtranslations': 'libs/oj/v2.2.0/resources',
    'text': 'libs/require/text',
    'promise': 'libs/es6-promise/es6-promise.min',
    'hammerjs': 'libs/hammer/hammer-2.0.8.min',
    'signals': 'libs/js-signals/signals.min',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    'css': 'libs/require-css/css.min',
    'customElements': 'libs/webcomponents/CustomElements.min',
    'proj4': 'libs/proj4js/dist/proj4'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  },

  // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
  // resources with a custom translation file.
  // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
  // a path that is relative to the location of this main.js file.
  config: {
    ojL10n: {
      merge: {
        //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
      }
    },
    text: {
      // Override for the requirejs text plugin XHR call for loading text resources on CORS configured servers
      useXhr: function (url, protocol, hostname, port) {
        // Override function for determining if XHR should be used.
        // url: the URL being requested
        // protocol: protocol of page text.js is running on
        // hostname: hostname of page text.js is running on
        // port: port of page text.js is running on
        // Use protocol, hostname, and port to compare against the url being requested.
        // Return true or false. true means "use xhr", false means "fetch the .js version of this resource".
        return true;
      }
    }
  }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtagcloud', 'promise', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojarraytabledatasource'], function (oj, ko, $) {
  /**
   * ----------------------------------------
   * Step 1: Config your application
   * ----------------------------------------
   */

  // Set the base url of your application, e.g. http://localhost:8080
  baseURL = 'http://localhost:8080'

  /**
   * ------------------------------------------------------------
   * Step 2: Implement Issue List View Model, see below
   * ------------------------------------------------------------
   */
  function IssueListViewModel()
  {
    var self = this;

    var issueArray = [
      {id: 1, title: 'Call @John for @football'},
      {id: 2, title: 'Send @invitations to birthday party'},
      {id: 3, title: 'Do we have @cat_food'},
      {id: 4, title: 'Pick up @Andi from @kindergarden'},
      {id: 5, title: 'Write @SOFA development plan'},
      {id: 6, title: 'Buy @football tickets'},
    ];

    self.deptObservableArray = ko.observableArray(issueArray);
    self.datasource = new oj.ArrayTableDataSource(self.deptObservableArray, {idAttribute: 'id'});

    self.inputIssueId = ko.observable();
    self.inputIssueTitle = ko.observable();

    /**
     * ------------------------------------------------------------
     * Step 2.1: Activate the GET request to the /issues endpoint.
     * ------------------------------------------------------------
     */
    self.getAllIssues = function() {
      var jqxhr = $.get(baseURL + '/issues', function(data) {
        // nothing to do here
      })
      .done(function(data) {
        // called on success

        // uncomment the follwing lines step by step and see what happens
        //self.deptObservableArray([]);
        //self.deptObservableArray([{'id': 1, 'title': 'foo'}, {'id': 2, 'title': 'bar'}]);
        //self.deptObservableArray(data)
      })
      .fail(function() {
        // nothing to do here
      })
      .always(function() {
        // nothing to do here
      });
    };

    /**
     * ------------------------------------------------------------
     * Step 2.2: Implement a GET request to the /issues/{issue_id}
     * endpoint. Don't forget to prepend the baseURL.
     * ------------------------------------------------------------
     */
    self.getIssue = function(id)
    {
      // set the url of the endpoint
      var getIssueEndpoint = '';
      if(getIssueEndpoint == '') {
        return;
      }

      var jqxhr = $.get(getIssueEndpoint, function(data) {
        // nothing to do here
      })
      .done(function(data) {
        // called on success

        issueListViewModel.inputIssueId(data['id']);
        issueListViewModel.inputIssueTitle(data['title']);
      })
      .fail(function() {
        // nothing to do here
      })
      .always(function() {
        // nothing to do here
      });
    };

    /**
     * ------------------------------------------------------------
     * Step 2.3: Implement a POST request to the /issues endpoint.
     * ------------------------------------------------------------
     */
    self.addIssue = function()
    {
      // set the url of the endpoint
      var addIssueEndpoint = '';
      if(addIssueEndpoint == '') {
        return;
      }

      var post_data = {
        'title': self.inputIssueTitle(),
        'category': 'General'
      }

      var jqxhr = $.post({
        'url': addIssueEndpoint,
        'dataType': 'json',
        'data': post_data}, function(data) {
        // nothing to do here
      })
      .done(function(data) {
        // called on success

        // add new issue to self.deptObservableArray
      })
      .fail(function() {
        // nothing to do here
      })
      .always(function() {
        // nothing to do here
      });
    };
    
    /**
     * ------------------------------------------------------------
     * Step 2.4: Implement a PUT request to the /issues/{issue_id}
     * endpoint.
     * ------------------------------------------------------------
     */
    self.updateIssue = function()
    {
      // set the url of the endpoint
      var updateIssueEndpoint = '';
      if(updateIssueEndpoint == '') {
        return;
      }

      // Implement ajax request here
    };
    
    /**
     * ------------------------------------------------------------
     * Step 2.5: Implement a DELETE request to the /issues/{issue_id}
     * endpoint.
     * ------------------------------------------------------------
     */
    self.removeIssue = function()
    {
      // set the url of the endpoint
      var removeIssueEndpoint = '';
      if(removeIssueEndpoint == '') {
        return;
      }

      // Implement ajax request here
    };
  }

  issueListViewModel = new IssueListViewModel()

  /**
   * ----------------------------------------
   * Class TagCloudViewModel
   * ----------------------------------------
   */
  function TagCloudViewModel(socialNetworks) {

    function getAgeGroup(ageGroups) {
      var teenager = ageGroups["14-17"];
      var youngAdult = ageGroups["18-34"];
      var middleAged = ageGroups["35-54"];
      if (teenager > youngAdult && teenager > middleAged)
          return "14-17";
      else if (youngAdult > teenager && youngAdult > middleAged)
          return "18-34";
      else
          return "35-54";
    }

    var handler = new oj.ColorAttributeGroupHandler({"14-17": "#267db3", "18-34": "#ed6647", "35-54": "#8561c8"});
    function getColor(ageGroups) {
      return handler.getValue(getAgeGroup(ageGroups));
    }

    var items = [];
    for (var i=0; i<socialNetworks.length; i++) {
      var network = socialNetworks[i];
      items.push({
        id: network['id'],
        label: network['id'],
        value: network['total'],
        shortDesc: network['id']+': Most popular amongst age group '+getAgeGroup(network),
        color: getColor(network)
      });
    }
    this.tags = ko.observableArray(items);

    this.valueButtonClick = function(data, event) {
      for (var i = 0; i < items.length; i++) {
        if (Math.random() < 0.4)
          items[i].value = Math.random()*100;
      }
      this.tags(items);
      return true;
    }

    var ageBrackets = ["14-17", "18-34", '35-54'];
    this.colorButtonClick = function(data, event) {
      for (var i = 0; i < items.length; i++) {
        if (Math.random() < 0.3)
          items[i].style = 'color:'+handler.getValue(ageBrackets[Math.round(Math.random()*3)]);
      }
      this.tags(items);
      return true;
    }

    var addIndex;
    this.itemButtonClick = function(data, event) {
      if (items.length <= 13) {
        var newItem = {
          id: "NewNetwork", value: 42.5,
          style: 'color:'+handler.getValue("14-17"), label: "New Network",
          shortDesc: "New Social Network"
        };
        addIndex = Math.round(Math.random()*4);
        items.splice(addIndex, 0, newItem);
      }
      else {
          items.splice(addIndex, 1);
      }
      this.tags(items);
      return true;
    }
  }

  $(document).ready(function() {
    issueListViewModel.getAllIssues();

    $.getJSON("issueTags.json",
    //$.getJSON(baseURL + '/issues',
      function(data) {
        ko.applyBindings(issueListViewModel, document.getElementById('issueListWrapper'));
        ko.applyBindings(new TagCloudViewModel(data), document.getElementById('tagCloudWrapper'));

        $('#issueList').on('ojoptionchange', currentRowListener);
      }
    )
  }
  );

  function currentRowListener(event, data)
  {
    if (data['option'] == 'currentRow' && data['value'] != null)
    {
      var rowIndex = data['value']['rowIndex'];
      var dept = issueListViewModel.deptObservableArray()[rowIndex];

      issueListViewModel.getIssue(dept['id']);
    }
  };
});
