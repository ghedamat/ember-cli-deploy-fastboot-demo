const S3Downloader = require('fastboot-s3-downloader');
const FastBootAppServer = require('fastboot-app-server');
const S3Notifier = require('fastboot-s3-notifier');

let downloader = new S3Downloader({
  bucket: 'ember-cli-deploy-fastboot-demo',
  key: 'fastboot-deploy-info.json',
  region: 'us-east-1',
});

let notifier = new S3Notifier({
  bucket: 'ember-cli-deploy-fastboot-demo',
  key: 'fastboot-deploy-info.json',
  region: 'us-east-1',
});

let server = new FastBootAppServer({
  notifier: notifier,
  downloader: downloader,
});

server.start();
