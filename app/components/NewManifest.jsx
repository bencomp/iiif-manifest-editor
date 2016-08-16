var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var manifesto = require('manifesto.js');
var uuid = require('node-uuid');

var NewManifest = React.createClass({
  componentDidMount: function() {
    var {dispatch} = this.props;
    // set up manifest skeleton
    var emptyManifest = {
      "@context": "http://iiif.io/api/presentation/2/context.json",
  	  "@id": "http://" + uuid(),
  	  "@type": "sc:Manifest",
  	  "label": "[Click to edit label]",
  	  "description": [
        {
        "@value": "[Click to edit description]",
        "@language": "en"
        }
      ],
  	  "license": "https://creativecommons.org/licenses/by/3.0/",
  	  "attribution": "[Click to edit attribution]",
  	  "sequences": [
  		  {
          "@id": "http://" + uuid(),
          "@type": "sc:Sequence",
          "label": [
            {
              "@value": "Normal Sequence",
              "@language": "en"
            }
          ],
          "canvases": []
         }
  	  ],
  	  "structures": []
    };

    dispatch(actions.setManifestoObject(manifesto.create(JSON.stringify(emptyManifest))));
    dispatch(actions.setManifestData(emptyManifest));
    window.location = '#/edit';  // redirect to edit manifest

  },
  render: function() {
    return false;
  }

});

module.exports = connect()(NewManifest);
