/**
 * Created by IntelliJ IDEA.
 * User: Derek
 * Date: 2/28/13
 * Time: 11:36 PM
 * To change this template use File | Settings | File Templates.
 */


var Battlefield = function(graveyard, exiled){

    this.onEntersBattleFieldTriggers = [];
    this.onLeavesBattleFieldTriggers = [];

    this.graveyard = graveyard;

    this.exiled = exiled;

    this.addEntersBattleFieldTrigger = function(trigger){
        this.onEntersBattleFieldTriggers.push(trigger);
    }

    this.addLeavesBattleFieldTrigger = function(trigger){
        this.onLeavesBattleFieldTriggers.push(trigger);
    }

    this.addPermanent = function(permanent){
        this.permanentEntersBattlefield(permanent);
        this.permanants.push(permanent);
    }

    this.destroyPermanent = function(permanent){
        this.permanentLeavesBattlefield(permanent);
        permanents.splice(this.permanents.indexOf(permanent), 1);
    }

    this._permanentEntersBattlefield = function(permanent){
        if(permanent.onEntersBattleFieldTriggers.length > 0){
            for(var oebBattlefieldTrigger in permanent.onEntersBattleFieldTriggers){
                permanent.onEntersBattleFieldTriggers[oebBattlefieldTrigger](this)
            }
        }

        if(this.onEntersBattleField.length > 0){
            for(var oebCardTrigger in this.onEntersBattleFieldTriggers){
                this.onEntersBattleFieldTriggers[oebCardTrigger](permanent, permanent._meta.controller);
            }
        }
    }

    this._permanentLeavesBattlefield = function(permanent){
        if(permanent.onLeavesBattleFieldTriggers.length > 0){
            for(var olbBattlefieldTrigger in permanent.onLeavesBattleFieldTriggers){
                permanent.onLeavesBattleFieldTriggers[olbBattlefieldTrigger](this)
            }
        }

        if(this.onLeavesBattleFieldTriggers.length > 0){
            for(var olbCardTrigger in this.onLeavesBattleFieldTriggers){
                this.onLeavesBattleFieldTriggers[olbCardTrigger](permanent, permanent._meta.controller);
            }
        }
    }

}