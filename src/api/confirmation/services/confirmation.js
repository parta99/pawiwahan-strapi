'use strict';

/**
 * confirmation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::confirmation.confirmation');
