#!/usr/bin/env node

const program = require('commander')
const models = require('./models/manage')

program
  .version('1.0.0')
  .description('World Cup 2018 Russia')

program
  .command('refresh')
  .alias('r')
  .description('Get newest data from server')
  .action(() => {
    models.refreshData()
  })

program
  .command('sowstadium')
  .alias('std')
  .description('Get newest data from server')
  .action(() => {
    models.getStadiums()
  })

program
  .command('tvchannels')
  .alias('tvc')
  .description('Get newest data from server')
  .action(() => {
    models.getTvChannels()
  })

program
  .command('teams')
  .alias('tm')
  .description('Get newest data from server')
  .action(() => {
    models.getTeams()
  })

program
  .command('groupmatch')
  .alias('gmatch')
  .description('Get newest data from server')
  .action(() => {
    models.getGroupsMatch()
  })

program
  .command('groupname')
  .alias('gname')
  .description('Get newest data from server')
  .action((str, options) => {
    var args = options.args[0];
    models.getMatchByGroupName(args)
  })

program.parse(process.argv)
