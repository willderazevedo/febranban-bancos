/*!
 * febraban-bancos <https://github.com/willderazevedo/febranban-bancos>
 *
 * Copyright (c) 2018 Willder Azevedo, contributors.
 * Licensed under the MIT License
 */

'use strict';

var jsdom          = require("jsdom");
var request        = require('request');
const { JSDOM }    = jsdom;
const { window }   = new JSDOM();
const { document } = (new JSDOM('')).window;

global.document = document;

var $ = require('jquery')(window);

class FebrabanBanks {

    static getBanks()
    {
        request("https://www.febraban.org.br/associados/utilitarios/bancos.asp", function(error, response, body) {
            let html        = $(body);
            let banksHtml   = html.find('tbody tr:nth-child(n+5)');
            let banksObject = [];

            banksHtml.each(function (index, element) {
                let objectAux = {};
                let columns   = $(element).find('td:nth-child(-n + 2)');
                
                columns.each(function (index, element) {
                    if (index == 0) {
                        objectAux["code"] = $.trim($(element).text());
                        
                        return true;
                    }

                    objectAux["name"] = $.trim($(element).text());
                });

                if (!objectAux.code) {
                    return true;
                }

                banksObject.push(objectAux);
            });
            
            if (process.argv.includes('--log', 2) || process.argv.includes('-l', 2)) {
                console.log(banksObject);

                return false;
            }

            return banksObject;
        });
    }
}

module.exports = FebrabanBanks;

FebrabanBanks.getBanks();