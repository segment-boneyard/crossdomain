
var assert = require('assert');
var crossdomain = require('..');


describe('crossdomain', function () {
  it('should render a simple crossdomain.xml', function () {
    var xml = crossdomain({ domain: '*.segment.io' });
    assert.deepEqual(xml, '<cross-domain-policy><allow-http-request-headers-from domain="*.segment.io" headers="*"/><site-control permitted-cross-domain-policies="all"/><allow-access-from domain="*" secure="false"/></cross-domain-policy>');
  });
});