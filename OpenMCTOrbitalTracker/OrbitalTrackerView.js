define([
    // Provide your input files / definitions here
    './OrbitalTrackerController',
    './OrbitalTrackerModel',
    './OrbitalTrackerRenderer',
    './orbital-tracker.html',
    './orbital-tracker.scss'
], function (
    orbitalTrackerController,
    orbitalTrackerModel,
    orbitalTrackerRenderer,
    orbitaltrackerTemplate
) {

    function orbitalTrackerView(domainObject, openmct, document) {
        this.domainObject = domainObject;
        this.openmct = openmct;
        this.document = document;
    }

    orbitalTrackerView.prototype.show = function (container) {
        var self = this;
        var data = {
            // Build your data object here.
            // eg.
            nodes: []

        };
        
        // Implement your controller
        
        self.controller = new orbitalTrackerController(
            data,
            // ...
        );
    };

    orbitalTrackerView.prototype.destroy = function () {
        if (this.controller) {
            this.controller.destroy();
            delete this.controller;
        }
    };

    return orbitalTrackerView;
});