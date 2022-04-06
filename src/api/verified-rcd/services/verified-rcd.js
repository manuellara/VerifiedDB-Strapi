'use strict';

/**
 * verified-rcd service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verified-rcd.verified-rcd');
