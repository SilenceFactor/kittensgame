/**
 * Diplomacy
 */
dojo.declare("classes.managers.DiplomacyManager", null, {

	game: null,

	races: [{
		name: "lizards",
		title: $I("trade.race.lizards"),
		standing: 0.25,
		embassyPrices: [{
			name: "culture",
			val: 100
		}],
		buys: [
			{name: "minerals", val: 1000}
		],
		sells:[
			{name: "wood", value: 500, chance: 1, width: 0.08, seasons:{
				"spring": -0.05,
				"summer": 0.35,
				"autumn": 0.15,
				"winter": 0.05
			}},
			{name: "beam", value: 10, chance: 0.25, width: 0.15, minLevel: 5},
			{name: "scaffold", value: 1, chance: 0.1, width: 0.1, minLevel: 10}
		],
		collapsed: false,
		pinned: false
	},{
		name: "sharks",
		title: $I("trade.race.sharks"),
		standing: 0,
		embassyPrices: [{
			name: "culture",
			val: 100
		}],
		buys: [
			{name: "iron", val: 100}
		],
		sells:[
			{name: "catnip", value: 35000, chance: 1, width: 0.15, seasons:{
				"spring": 0.2,
				"summer": -0.05,
				"autumn": 0.15,
				"winter": 0.45
			}},
			{name: "parchment", value: 5, chance: 0.25, width: 0.25, minLevel: 5},
			{name: "manuscript", value: 3, chance: 0.15, width: 0.25, minLevel: 10},
			{name: "compedium", value: 1, chance: 0.1, width: 0.25, minLevel: 15}
		],
		collapsed: false,
		pinned: false
	},{
		name: "griffins",
		title: $I("trade.race.griffins"),
		standing: -0.15,
		embassyPrices: [{
			name: "culture",
			val: 1000
		}],
		buys: [
			{name: "wood", val: 500}
		],
		sells:[
			{name: "iron", value: 250, chance: 1, width: 0.12, seasons:{
				"spring": -0.25,
				"summer": -0.05,
				"autumn": 0.35,
				"winter": -0.2
			}},
			{name: "steel", value: 25, chance: 0.25, width: 0.1, minLevel: 5},
			{name: "gear", value: 5, chance: 0.1, width: 0.25, minLevel: 10}
		],
		collapsed: false,
		pinned: false
	},{
		name: "nagas",
		title: $I("trade.race.nagas"),
		standing: 0,
		hidden: true,
		buys: [
			{name: "ivory", val: 500}
		],
		embassyPrices: [{
			name: "culture",
			val: 500
		}],
		sells:[
			{name: "minerals", value: 1000, chance: 1, width: 0.18, seasons:{
				"spring": 0.25,
				"summer": 0.05,
				"autumn": -0.35,
				"winter": -0.05
			}},
			{name: "slab", value: 5, chance: 0.75, width: 0.15, minLevel: 5},
			{name: "concrate", value: 5, chance: 0.25, width: 0.05, minLevel: 10},
			{name: "megalith", value: 1, chance: 0.1, width: 0.1, minLevel: 15}
		],
		collapsed: false,
		pinned: false
	},{
		name: "zebras",
		hidden: true,
		title: $I("trade.race.zebras"),
		//evil little bastards
		standing: -0.3,
		embassyPrices: [{
			name: "culture",
			val: 25000
		}],
		buys: [
			{name: "slab", val: 50}
		],
		sells:[
			{name: "iron", value: 300, chance: 1, width: 0.08, seasons:{
				"spring": 0,
				"summer": 0.15,
				"autumn": -0.1,
				"winter": -0.2
			}},
			{name: "plate", value: 2, chance: 0.65, width: 0.25, seasons:{
				"spring": 0.05,
				"summer": -0.15,
				"autumn": 0.05,
				"winter": 0.25
			}},
			{name: "alloy", value: 0.25, chance: 0.05, width: 0.05, minLevel: 5}
		],
        unlocks:{
            policies:["zebraRelationsAppeasement", "zebraRelationsBellicosity"]
        },
		collapsed: false,
		pinned: false
	},{
		name: "spiders",
		hidden: true,
		title: $I("trade.race.spiders"),
		//friendly, but not much
		standing: 0.15,
		embassyPrices: [{
			name: "culture",
			val: 5000
		}],
		buys: [
			{name: "scaffold", val: 50}
		],
		sells:[
			{name: "coal", value: 350, chance: 1, width: 0.15, seasons:{
				"spring": 0,
				"summer": 0.05,
				"autumn": 0.15,
				"winter": -0.05
			}},
			{name: "oil", value: 100, chance: 0.25, width: 0.15, minLevel: 5}
		],
		collapsed: false,
		pinned: false
	},{
		name: "dragons",
		hidden: true,
		title: $I("trade.race.dragons"),
		standing: 0,
		embassyPrices: [{
			name: "culture",
			val: 7500
		}],
		buys: [
			{name: "titanium", val: 250}
		],
		sells:[
			{name: "uranium", value: 1, chance: 0.95, width: 0.25},
			{name: "thorium", value: 1, chance: 0.5, width: 0.25, minLevel: 5}
		],
		collapsed: false,
		pinned: false
	},{
		name: "leviathans",
		hidden: true,
		title: $I("trade.race.leviathans"),
		standing: 0,
		buys: [
			{name: "unobtainium", val: 5000}
		],
		sells:[
			{name: "starchart", value: 250, chance: 0.5, width: 0.8},
			{name: "timeCrystal", value: 0.25, chance: 0.98, width: 0.15},
			{name: "sorrow", value: 1, chance: 0.15, width: 0.1},
			{name: "relic", value: 1, chance: 0.05, width: 0}
		],
		unlocks:{
			policies:["transkittenism", "necrocracy", "radicalXenophobia"]
		},
		collapsed: false,
		pinned: false
    }],

	constructor: function(game){
		this.game = game;
	},

	get: function(raceName){
		for( var i = 0; i < this.races.length; i++){
			if (this.races[i].name == raceName){
				return this.races[i];
			}
		}
		console.error("Failed to get race for id '" + raceName + "'");
		return null;
	},

	getTradeRatio: function() {
		return this.game.getEffect("tradeRatio") + this.game.village.getEffectLeader("merchant", 0);
	},

	resetState: function(){
		for (var i = 0; i < this.races.length; i++){
			var race = this.races[i];
			race.embassyLevel = 0;
			race.unlocked = false;
			race.collapsed = false;
			race.energy = 0;
			race.duration = 0;
		}
	},

	save: function(saveData){
		saveData.diplomacy = {
			races: this.game.bld.filterMetadata(this.races, [
				"name", "embassyLevel", "unlocked", "collapsed", "energy", "duration", "pinned"
			])
		};
	},

	load: function(saveData){
		if (saveData.diplomacy) {
			this.game.bld.loadMetadata(this.races, saveData.diplomacy.races);
		}
	},

	hasUnlockedRaces: function(){
		for (var i = 0; i < this.races.length; i++){
			if (this.races[i].unlocked){
				return true;
			}
		}
		return false;
	},

	/**
	 * Returns true if particular resource can be traded to you by a race
	 */
	isValidTrade: function(sell, race){
		var resName = sell.name;
		return !(sell.minLevel && race.embassyLevel < sell.minLevel)
			&& (this.game.resPool.get(resName).unlocked || resName === "uranium" || race.name === "leviathans");
	},

	unlockRandomRace: function(){
		var unmetRaces = [];
		var hasLockedHiddenRaces = false;

		for (var i = 0; i < this.races.length; i++){
			if (!this.races[i].unlocked ){
				if (!this.races[i].hidden){
					unmetRaces.push(this.races[i]);
				}else{
					hasLockedHiddenRaces = true;
				}
			}
		}

		if (!unmetRaces.length && !hasLockedHiddenRaces){
			return null;
		}

		//nagas like highly cultural kittens :3
		var nagas = this.get("nagas");
		if (!nagas.unlocked && this.game.resPool.get("culture").value >= 1500){
			nagas.unlocked = true;
			return nagas;
		}

		var zebras = this.get("zebras");
		if (!zebras.unlocked && this.game.resPool.get("ship").value >= 1){
			zebras.unlocked = true;
			this.game.workshop.get("caravanserai").unlocked = true;
            this.game.science.getPolicy("zebraRelationsAppeasement").unlocked = true;
            this.game.science.getPolicy("zebraRelationsBellicosity").unlocked = true;
			return zebras;
		}

		var spiders = this.get("spiders");
		if (!spiders.unlocked && this.game.resPool.get("ship").value >= 100 && this.game.resPool.get("science").maxValue > 125000){
			spiders.unlocked = true;
			return spiders;
		}

		var dragons = this.get("dragons");
		if (!dragons.unlocked && this.game.science.get("nuclearFission").researched){
			dragons.unlocked = true;
			return dragons;
		}

		var raceId = (Math.floor(Math.random() * unmetRaces.length));

		if (unmetRaces[raceId]){	//someone reported a bug there, to be investigated later
			unmetRaces[raceId].unlocked = true;
			return unmetRaces[raceId];
		}
		return null;
	},

	update: function() {
		if (!this.hasUnlockedRaces()) {

			var unlockYear = (this.game.prestige.getPerk("navigationDiplomacy").researched
					&& this.game.resPool.get("ship").value > 0) ?
				0 : this.game.prestige.getPerk("diplomacy").researched ?
				1 : this.game.karmaKittens > 0 ? 5 : 20;

			if (this.game.calendar.year < unlockYear) {
				return;
			}

			var race = this.unlockRandomRace();

			this.game.diplomacyTab.visible = true;
			this.game.render();

			this.game.msg($I("trade.msg.emissary", [race.title]), "notice");
		}
	},

    //------------ IDK, silly gimmickish stuff -----------
    unlockElders : function(){
        var elders = this.get("leviathans");
		if (elders.duration){	//elder visits do not stack
			return;
		}

        elders.unlocked = true;
        // 5 years + 1 year per energy unit
        elders.duration = this.game.calendar.daysPerSeason * this.game.calendar.seasonsPerYear *  (5  + elders.energy);
		
		if(elders.autoPinned){elders.pinned=true;}

        this.game.msg($I("trade.msg.elders"), "urgent");
    },

    onNewDay: function(){
        var elders = this.get("leviathans");
        if (elders.duration <= 0  && elders.unlocked){
			elders.unlocked = false;
			elders.pinned=false;
			this.game.msg($I("trade.msg.elders.departed"), "notice");

			this.game.render();

			return;
		}
        if (elders.duration > 0){
            elders.duration--;
        }
	},

	tradeImpl: function(race, totalTradeAmount) {
		if(race.unlocks){
            this.game.unlock(race.unlocks);
		}
		var printMessages = totalTradeAmount == 1;
		var standingRatio = this.game.getEffect("standingRatio") + this.game.diplomacy.calculateStandingFromPolicies(race.name, this.game);

		var failedTradeAmount = race.standing < 0 ? this.game.math.binominalRandomInteger(totalTradeAmount, -(race.standing + standingRatio)) : 0;
		var successfullTradeAmount = totalTradeAmount - failedTradeAmount;

		if (successfullTradeAmount == 0) {
			if (printMessages) {
				this.game.msg($I("trade.msg.trade.failure", [race.title]) , null, "trade");
			}
			return;
		}

		// at most 1 year + 1 season per energy unit
		race.duration = Math.min(race.duration, this.game.calendar.daysPerSeason * (this.game.calendar.seasonsPerYear + race.energy));

		var bonusTradeAmount = race.standing > 0 ? this.game.math.binominalRandomInteger(totalTradeAmount, race.standing + standingRatio / 2) : 0;
		var normalTradeAmount = successfullTradeAmount - bonusTradeAmount;

		if (bonusTradeAmount > 0) {
			if (printMessages) {
				this.game.msg($I("trade.msg.trade.success", [race.title]), null, "trade");
			}
		}

		var boughtResources = {};
		var tradeRatio = 1 + this.game.diplomacy.getTradeRatio() + this.game.diplomacy.calculateTradeBonusFromPolicies(race.name, this.game);
		var raceRatio = 1 + race.energy * 0.02;
		var currentSeason = this.game.calendar.getCurSeason().name;

		var embassyEffect = this.game.ironWill ? 0.0025 : 0.01;
		for (var i = 0; i < race.sells.length; i++) {
			var sellResource = race.sells[i];
			//you must be this tall to trade this rare resource
			if (!this.game.diplomacy.isValidTrade(sellResource, race)) {
				continue;
			}

			
			var tradeChance = sellResource.chance * 
				(1 + (
					race.embassyPrices ? 
					this.game.getLimitedDR(race.embassyLevel * embassyEffect, 0.75) : 
					0)
				);

			var resourcePassedNormalTradeAmount = this.game.math.binominalRandomInteger(normalTradeAmount, tradeChance);
			var resourcePassedBonusTradeAmount = this.game.math.binominalRandomInteger(bonusTradeAmount, tradeChance);

			if (resourcePassedNormalTradeAmount + resourcePassedBonusTradeAmount == 0) {
				continue;
			}

			var fuzzedNormalAmount = this._fuzzGainedAmount(resourcePassedNormalTradeAmount, sellResource.width);
			var fuzzedBonusAmount = this._fuzzGainedAmount(resourcePassedBonusTradeAmount, sellResource.width);
			var resourceSeasonTradeRatio = 1 + (sellResource.seasons ? sellResource.seasons[currentSeason] : 0);
			boughtResources[sellResource.name] = (fuzzedNormalAmount + fuzzedBonusAmount * 1.25) 
				* sellResource.value * tradeRatio * raceRatio * resourceSeasonTradeRatio;
		}

		//-------------------- 35% chance to get spice + 1% per embassy lvl ------------------
		var spiceTradeAmount = this.game.math.binominalRandomInteger(
			successfullTradeAmount, 
			0.35 * (1 + (race.embassyPrices ?  race.embassyLevel * embassyEffect : 0))
		);
		boughtResources["spice"] = 25 * spiceTradeAmount + 
			50 * tradeRatio * this.game.math.irwinHallRandom(spiceTradeAmount);

		//-------------- 10% chance to get blueprint ---------------
		boughtResources["blueprint"] = Math.floor(
			this.game.math.binominalRandomInteger(successfullTradeAmount, 0.1)
		);

		//-------------- 15% + 0.35% chance per ship to get titanium ---------------
		if (race.name == "zebras") {
			var shipAmount = this.game.resPool.get("ship").value;
			var zebraRelationModifierTitanium = this.game.getEffect("zebraRelationModifier") * this.game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
			boughtResources["titanium"] = (1.5 + shipAmount * 0.03) * (1 + zebraRelationModifierTitanium) * this.game.math.binominalRandomInteger(successfullTradeAmount, 0.15 + shipAmount * 0.0035);
		}

		//Update Trade Stats
		this.game.stats.getStat("totalTrades").val += successfullTradeAmount;
		this.game.stats.getStatCurrent("totalTrades").val += successfullTradeAmount;

		return boughtResources;
	},

	_fuzzGainedAmount: function(amount, width) {
		return amount + width * (this.game.math.irwinHallRandom(amount) - amount / 2);
	},

	trade: function(race){
		this.gainTradeRes(this.tradeImpl(race, 1), 1);
	},

	buildEmbassy: function(race){
		race.embassyLevel++;
	},

	tradeMultiple: function(race, amt){
		//------------ safety measure ----------------
		if (!this.hasMultipleResources(race, amt)) {
			return;
		}

		//-------------- pay prices ------------------
        var manpowerCost = 50 - this.game.getEffect("tradeCatpowerDiscount");
        var goldCost = 15 - this.game.getEffect("tradeGoldDiscount");
		this.game.resPool.addResEvent("manpower", -manpowerCost * amt);
		this.game.resPool.addResEvent("gold", -goldCost * amt);
		this.game.resPool.addResEvent(race.buys[0].name, -race.buys[0].val * amt);

		//---------- calculate yield -----------------
		this.gainTradeRes(this.tradeImpl(race, amt), amt);
 	},

	hasMultipleResources: function(race, amt){
		return (this.game.resPool.get("gold").value >= (15 - this.game.getEffect("tradeGoldDiscount")) * amt &&
			this.game.resPool.get("manpower").value >= (50 - this.game.getEffect("tradeCatpowerDiscount")) * amt &&
			this.game.resPool.get(race.buys[0].name).value >= race.buys[0].val * amt);
	},

	tradeAll: function(race){
		this.tradeMultiple(race, this.getMaxTradeAmt(race));
	},

	/**
	 * Prints a formatted output of a trade results based on a resource map
	 */
	gainTradeRes: function(yieldResTotal, amtTrade){
		if (yieldResTotal) {
			var output = false;
			for (var res in yieldResTotal) {
				var amt = this.game.resPool.addResEvent(res, yieldResTotal[res]);
				if (amt > 0){
					var resPool = this.game.resPool.get(res);
					var name = resPool.title || res;
					var msg = $I("trade.msg.resources", [this.game.getDisplayValueExt(amt), name]);
					var type = null;
					if (res == "titanium" || res == "blueprint" || res == "relic"){
						msg += "!";
						type = "notice";
					}
					this.game.msg(msg, type, "trade", true);
					output = true;
				}
			}

			if (!output){
				this.game.msg($I("trade.msg.trade.empty"), null, "trade", true);
			}
			this.game.msg($I("trade.msg.trade.caravan", [amtTrade]), null, "trade");
		}
	},

	getMaxTradeAmt: function(race){
        var manpowerCost = 50;
		var goldCost = 15;
		
		var amt = [
			Math.floor(this.game.resPool.get("gold").value / 
				Math.max(goldCost - this.game.getEffect("tradeGoldDiscount"), 1)
			),
			Math.floor(this.game.resPool.get("manpower").value / Math.max(
				manpowerCost - this.game.getEffect("tradeCatpowerDiscount"), 1)
			),
			Math.floor(this.game.resPool.get(race.buys[0].name).value / race.buys[0].val)
		];

		var min = Number.MAX_VALUE;
		for (var i = 0; i < amt.length; i++){
			if (min > amt[i]) { min = amt[i]; }
		}

		if (min == Number.MAX_VALUE || min == 0){
			return;
		}
		return min;
	},

	feedElders: function(){
		var ncorns = this.game.resPool.get("necrocorn");
		var elders = this.game.diplomacy.get("leviathans");
		if (ncorns.value >= 1){
			elders.energy++;

			var markerCap = Math.floor(
				(this.game.religion.getZU("marker").getEffectiveValue(this.game) * 5 + 5) *
				(1 + this.game.getEffect("leviathansEnergyModifier"))
			);
			 
			if (elders.energy > markerCap){
				elders.energy = markerCap;
			}

			ncorns.value--;
			this.game.msg($I("trade.msg.elders.pleased"), "notice");
		} else {
			ncorns.value = 0;
			this.game.msg($I("trade.msg.elders.displeased"), "notice");
			elders.duration = 0;
		}
	},

	buyBcoin: function(){
		var amt = this.game.resPool.get("relic").value / this.game.calendar.cryptoPrice;
		this.game.resPool.get("blackcoin").value += amt;
		this.game.resPool.get("relic").value = 0;
		this.game.msg($I("trade.bcoin.buy.msg", [this.game.getDisplayValueExt(amt)]));

	},

	sellBcoin: function(){
		var amt = this.game.resPool.get("blackcoin").value * this.game.calendar.cryptoPrice;
		this.game.resPool.get("relic").value += amt;
		this.game.resPool.get("blackcoin").value = 0;

		this.game.msg($I("trade.bcoin.sell.msg", [this.game.getDisplayValueExt(amt)]));
	},

	unlockAll: function(){
		for (var i in this.races){
			this.races[i].unlocked = true;
		}
		this.get("leviathans").duration = 10000;
		this.game.msg("All trade partners are unlocked");
	},
	calculatePhantomTradeposts: function(raceName, game){
		var phantomTradeposts = 0;
        phantomTradeposts += game.getEffect("globalRelationsBonus");
        if(raceName == "zebras"){
			phantomTradeposts += game.getEffect("zebraRelationModifier");
        }else{
			phantomTradeposts += game.getEffect("nonZebraRelationModifier");
        }
		return phantomTradeposts;
	},
    calculateStandingFromPolicies: function(raceName, game){
		var tradepostStandingRatio = game.bld.getBuildingExt("tradepost").meta.effects["standingRatio"];
		var phantomTradeposts = game.diplomacy.calculatePhantomTradeposts(raceName, game);
        return phantomTradeposts * tradepostStandingRatio;
	},
	calculateTradeBonusFromPolicies: function(raceName, game){
		var tradepostsTradeRatio = game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
		var phantomTradeposts = game.diplomacy.calculatePhantomTradeposts(raceName, game);
		return phantomTradeposts * tradepostsTradeRatio;
	}
});


dojo.declare("classes.diplomacy.ui.RacePanel", com.nuclearunicorn.game.ui.Panel, {
	tradeBtn: null,
	embassyButton: null,

	constructor: function(race) {
		this.race = race;
		this.name = race.title;
	},

	onToggle: function(isToggled){
		this.race.collapsed = isToggled;
	},
            
	render: function(container) {
        var attitudeFromPolicies = this.game.diplomacy.calculateStandingFromPolicies(this.race.name, this.game);
		var attitude = this.race.standing > 0
			? "friendly"
			: this.race.standing == 0
				? "neutral"
				: this.race.standing + this.game.getEffect("standingRatio") + attitudeFromPolicies < 0
					? "hostile"
					: "nowNeutral";
		this.name = this.race.title + " <span class='attitude'>" + $I("trade.attitude." + attitude) + "</span>";
		return this.inherited(arguments);
	},

	update: function(){
		if (this.tradeBtn){
			this.tradeBtn.update();
		}
		if (this.embassyButton){
			this.embassyButton.update();
		}
		if (this.autoPinnedButton){
			this.autoPinnedButton.update();
		}
	}
});

dojo.declare("classes.diplomacy.ui.EldersPanel", classes.diplomacy.ui.RacePanel, {
	feedBtn: null,

	render: function(container){
		var content = this.inherited(arguments);

		var self = this;
		this.feedBtn = new com.nuclearunicorn.game.ui.ButtonModern({
				name: $I("trade.msg.elders.feed"),
				description: $I("trade.msg.elders.feed.desc"),
				controller: new com.nuclearunicorn.game.ui.ButtonModernController(this.game),
				handler: function(){
					self.game.diplomacy.feedElders();
				}
			}, this.game);
		this.feedBtn.render(content);

		if (this.game.science.get("blackchain").researched || this.game.resPool.get("blackcoin").value > 0) {
			this.buyBcoin = new com.nuclearunicorn.game.ui.ButtonModern({
				name: $I("trade.bcoin.buy"),
				description: $I("trade.bcoin.buy.desc"),
				controller: new com.nuclearunicorn.game.ui.ButtonModernController(this.game),
				handler: function () {
					self.game.diplomacy.buyBcoin();
				}
			}, this.game);
			this.buyBcoin.render(content);

			this.sellBcoin = new com.nuclearunicorn.game.ui.ButtonModern({
				name: $I("trade.bcoin.sell"),
				description: $I("trade.bcoin.sell.desc"),
				controller: new com.nuclearunicorn.game.ui.ButtonModernController(this.game),
				handler: function () {
					self.game.diplomacy.sellBcoin();
				}
			}, this.game);
			this.sellBcoin.render(content);
		}

		if (this.game.science.get("antimatter").researched && this.game.workshop.get("invisibleBlackHand").researched) {
			this.crashBcoin = new com.nuclearunicorn.game.ui.ButtonModern({
				name: $I("trade.bcoin.crash"),
				description: $I("trade.bcoin.crash.desc"),
				controller: new com.nuclearunicorn.game.ui.CrashBcoinButtonController(this.game),
				handler: function () {
					self.game.calendar.correctCryptoPrice();
				}
			}, this.game);
			this.crashBcoin.render(content);
		}

		return content;
	},

	update: function() {
		this.inherited(arguments);
		if (this.feedBtn) {
			this.feedBtn.update();
		}
		if (this.crashBcoin) {
			this.crashBcoin.update();
		}
	}
});

dojo.declare("com.nuclearunicorn.game.ui.CrashBcoinButtonController", com.nuclearunicorn.game.ui.ButtonModernController, {
	defaults: function() {
		var result = this.inherited(arguments);
		result.hasResourceHover = true;
		result.simplePrices = true;
		return result;
	},

	updateEnabled: function(model) {
		this.inherited(arguments);
		model.enabled &= this.game.calendar.cryptoPrice > 550;
	},

	fetchExtendedModel: function(model) {
		model.prices = this.getPrices();
		this.inherited(arguments);
	},

	getPrices: function() {
		// 0.25 TC/trade × 0.98 trade probability / (5000 UO/trade) × 0.007 UO/tick × 1.75 microwarp bonus × 5 ticks/s × 800 s/year
		var tcPerStandardYear = 0.002401 * this.game.space.getBuilding("moonOutpost").val;
		tcPerStandardYear *= 1 + this.game.space.getBuilding("spaceElevator").val * 0.01 + this.game.space.getBuilding("orbitalArray").val * 0.02;
		tcPerStandardYear *= 1 + this.game.bld.get("factory").val * 0.045;
		tcPerStandardYear *= 1.03 + this.game.getEffect("tradeRatio") + this.game.prestige.getBurnedParagonRatio() * 0.03;
		tcPerStandardYear *= 1 + this.game.diplomacy.get("leviathans").energy * 0.02;

		var ticksPerYear = this.game.calendar.ticksPerDay * this.game.calendar.daysPerSeason * this.game.calendar.seasonsPerYear;
		// (1 × 2.4 [Redmoon] + 1 × 0.9 [Charon] + 8 × 1 [others]) / 10
		var tcPerTick_phase0 = 1.13 * tcPerStandardYear / ticksPerYear;
		var tcPerTick_phase1 = (2.4 * tcPerStandardYear - 9) / ticksPerYear;

		var heatPerShatter = this.game.challenges.getChallenge("1000Years").researched ? 5 : 10;
		var tcPerSkip = 1.13 * tcPerStandardYear * this.game.getEffect("shatterTCGain") * (1 + this.game.getEffect("rrRatio"));
		var tcPerShatter = (1 + heatPerShatter / 100) * tcPerSkip - 1;
		var tcPerTick_phase2 = tcPerTick_phase0 + tcPerShatter / heatPerShatter * this.game.getEffect("heatPerTick");

		var tcPerTick = Math.max(tcPerTick_phase0, tcPerTick_phase1, tcPerTick_phase2);
		// 10 ticks/day / (1.2499270834635280e-6 logInc/day), see calendar.js
		var ticksUntilNextNaturalCrash = 8000466.693057134 * Math.log(1100 / this.game.calendar.cryptoPrice);
		var tcBasePrice = Math.max(256, tcPerTick * ticksUntilNextNaturalCrash);
		var tcPrice = Math.pow(2, Math.ceil(Math.log(tcBasePrice) * Math.LOG2E));
		return [{name: "timeCrystal", val: tcPrice}];
	}
});

/** -------------------------------------
 * 			Trade Button
----------------------------------------- */

dojo.declare("com.nuclearunicorn.game.ui.TradeButtonController", com.nuclearunicorn.game.ui.ButtonModernController, {
	defaults: function() {
		var result = this.inherited(arguments);
		result.hasResourceHover = true;
		result.simplePrices = false;
		return result;
	}
});

//TODO Extract controller logic for this class
dojo.declare("com.nuclearunicorn.game.ui.TradeButton", com.nuclearunicorn.game.ui.ButtonModern, {

	race: null,

	trade25Href: null,
	trade100Href: null,
	tradeAllHref: null,

	constructor: function(opts, game){
		this.race = opts.race;

		this.handler = this.trade;	//weird hack
	},

	afterRender: function(){
		this.inherited(arguments);
		dojo.addClass(this.domNode, "trade");
	},

	renderLinks: function(){
		this.tradeAllHref = this.addLink({
			title: $I("btn.all.minor"),
			handler: function() {
				this.game.diplomacy.tradeAll(this.race);
			}
		});

		// 50% template
		this.tradeHalfHref = this.addLink({title: "", handler: ""});

		//20% template
		this.tradeFifthHref = this.addLink({title: "", handler: ""});
	},

	update: function(){
		this.inherited(arguments);

		var tradeMax = this.game.diplomacy.getMaxTradeAmt(this.race);

		// Change button content
		this.tradeAllHref.link.title = "x" + this.game.getDisplayValueExt(tradeMax, null, false, 0);

		// Update tradeHalfHref Link
		var tradeHalf = Math.floor(tradeMax / 2);
		// Change button content
		this.tradeHalfHref.link.textContent = this.game.opts.usePercentageConsumptionValues ? "50%" : "x" + this.game.getDisplayValueExt(tradeHalf, null, false, 0);
		this.tradeHalfHref.link.title = this.game.opts.usePercentageConsumptionValues ? "x" + this.game.getDisplayValueExt(tradeHalf, null, false, 0) : "50%";
		// Change handler
		dojo.disconnect(this.tradeHalfHref.linkHandler);
		this.tradeHalfHref.linkHandler = dojo.connect(this.tradeHalfHref.link, "onclick", this, dojo.partial(function(event){
			event.stopPropagation();
			event.preventDefault();

			dojo.hitch(this,
				function(){
					this.game.diplomacy.tradeMultiple(this.race, tradeHalf);
				}
			, event)();

			this.update();
		}));
		// Change display
		dojo.style(this.tradeHalfHref.link, "display", this.game.opts.showNonApplicableButtons || this.game.diplomacy.hasMultipleResources(this.race, 50) ? "" : "none");

		// Update tradeFifthHref Link
		var tradeFifth = Math.floor(tradeMax / 5);
		// Change button content
		this.tradeFifthHref.link.textContent = this.game.opts.usePercentageConsumptionValues ? "20%" : "x" + this.game.getDisplayValueExt(tradeFifth, null, false, 0);
		this.tradeFifthHref.link.title = this.game.opts.usePercentageConsumptionValues ? "x" + this.game.getDisplayValueExt(tradeFifth, null, false, 0) : "20%";
		// Change handler
		dojo.disconnect(this.tradeFifthHref.linkHandler);
		this.tradeFifthHref.linkHandler = dojo.connect(this.tradeFifthHref.link, "onclick", this, dojo.partial(function(event){
			event.stopPropagation();
			event.preventDefault();

			dojo.hitch(this,
				function(){
					this.game.diplomacy.tradeMultiple(this.race, tradeFifth);
				}
			, event)();

			this.update();
		}));
		// Change display
		dojo.style(this.tradeFifthHref.link, "display", this.game.opts.showNonApplicableButtons || this.game.diplomacy.hasMultipleResources(this.race, 25) ? "" : "none");

	}
});

/** -------------------------------------
 * 			Embassy Button
----------------------------------------- */

dojo.declare("classes.diplomacy.ui.EmbassyButtonController", com.nuclearunicorn.game.ui.ButtonModernController, {
	defaults: function() {
		var result = this.inherited(arguments);
		result.simplePrices = false;
		return result;
	},

	getName: function(model){		
		var name = this.inherited(arguments),
			level = model.options.race.embassyLevel;
		if (!level){ 
			return name; 
		}

		return $I("trade.embassy",[ model.options.race.embassyLevel ]);
	},

	getPrices: function(model) {
		var prices = dojo.clone(this.inherited(arguments));
        var priceCoeficient = 1;
        priceCoeficient -= this.game.getEffect("embassyCostReduction");
		for (var i = 0; i < prices.length; i++) {
            prices[i].val = prices[i].val * priceCoeficient * Math.pow(1.15, model.options.race.embassyLevel);
		}
		return prices;
	},

	hasSellLink: function(model){
		return false;
	},

	updateVisible: function(model){
		model.visible = this.game.science.get("writing").researched;
	}
});


dojo.declare("classes.diplomacy.ui.EmbassyButton", com.nuclearunicorn.game.ui.ButtonModern, {
	pinLinkHref: null,
	race: null,

	constructor: function(opts, game){
		this.race = opts.race;
		// console.log("race:", this.race);
	},


	renderLinks: function(){
		this.pinLinkHref = this.addLink({
			title: "&#9733;",
			handler: function() {
				if (!this.race.embassyLevel){
					return;
				}
				this.race.pinned = !this.race.pinned;
				console.log("toggled pin for race:", this.game.diplomacy.races);
			}
		});
	},

	update: function(){
		this.inherited(arguments);
		this.pinLinkHref.link.textContent = this.race.pinned ? "[v]" : "[ ]";
		this.pinLinkHref.link.title = this.race.pinned ? 
			$I("trade.embassy.pinned") : $I("trade.embassy.unpinned");
	}
});

/** -------------------------------------
 * 			Auto Pinned Button
----------------------------------------- */

dojo.declare("classes.diplomacy.ui.autoPinnedButtonController", com.nuclearunicorn.game.ui.ButtonModernController, {
	defaults: function() {
		var result = this.inherited(arguments);
		result.hasResourceHover = false;
		result.simplePrices = false;
		return result;
	},

	getName: function(model){
		var name = this.inherited(arguments);
		var res = "";
		if(model.options.race.autoPinned){
			res = $I("trade.autopinned.labelOn");
		}
		else{
			res = $I("trade.autopinned.labelOff");
		}
		return res;
	},

	hasSellLink: function(model){
		return false;
	},

	updateVisible: function(model){
		model.visible = true;
	}
});


dojo.declare("classes.diplomacy.ui.autoPinnedButton", com.nuclearunicorn.game.ui.ButtonModern, {
	pinLinkHref: null,
	race: null,

	constructor: function(opts, game){
		this.race = opts.race;
		console.log("race:", this.race);
	},


	renderLinks: function(){
		this.pinLinkHref = this.addLink({
			title: "&#9733;",
			handler: function() {
				if (this.race.name!="leviathans"){
					return;
				}
				this.race.pinned = !this.race.pinned;
				console.log("toggled pin for race:", this.game.diplomacy.races);
			}
		});
	},

	update: function(){
		this.inherited(arguments);
		this.pinLinkHref.link.textContent = this.race.pinned ? "[v]" : "[ ]";
		this.pinLinkHref.link.title = this.race.pinned ? 
			$I("trade.embassy.pinned") : $I("trade.embassy.unpinned");
	}
});

/** -------------------------------------
 * 			Explore Button
----------------------------------------- */

dojo.declare("classes.trade.ui.SendExplorersButtonController", com.nuclearunicorn.game.ui.ButtonModernController, {
	defaults: function() {
		var result = this.inherited(arguments);
		result.hasResourceHover = true;
		result.simplePrices = false;
		return result;
	},

	clickHandler: function(model, event){
		var dip = this.game.diplomacy;
		var race = dip.unlockRandomRace();

		if (race){
			this.game.msg($I("trade.new.civ"), "notice");
		} else {

			var hint = "";
			if (!dip.get("nagas").unlocked){
				hint = $I("trade.new.hint.nagas");
			} else if (!dip.get("zebras").unlocked){
				hint = $I("trade.new.hint.zebras");
			} else if (!dip.get("spiders").unlocked){
				hint = $I("trade.new.hint.spiders");
			} else if (!dip.get("dragons").unlocked){
				hint =  $I("trade.new.hint.dragons");
			} else {
				hint = $I("trade.new.hint.end");	//AHAHA NO
			}

			this.game.msg($I("trade.new.failure", [hint]));
			this.game.resPool.addResEvent("manpower", 950);
		}
		this.game.render();
	}
});

dojo.declare("classes.trade.ui.SendExplorersButton", com.nuclearunicorn.game.ui.ButtonModern, {

	afterRender: function(){
		this.inherited(arguments);

		dojo.addClass(this.domNode, "explore");
	}
});

//==================================================================================
//									DIPLOMACY
//==================================================================================

dojo.declare("com.nuclearunicorn.game.ui.tab.Diplomacy", com.nuclearunicorn.game.ui.tab, {

	racePanels: null,
	leviathansInfo: null,

	constructor: function(tabName, game){
		this.game = game;

		this.racePanels = [];
	},

	render: function(tabContainer){
		this.inherited(arguments);


		this.buttons = [];

		/*
		 * Once race panel is rendered, we will save the panels states.
		 *
		 * However races can be unlocked in random order, so after a new race appears
		 * we will clear array and reinitialise it again
		 */

		var races = [];
		for (var i = 0; i < this.game.diplomacy.races.length; i++){
			var race = this.game.diplomacy.races[i];
			if (race.unlocked){
				races.push(race);
			}
		}
		if (this.racePanels.length != races.length){
			this.racePanels = [];
		}

		var self = this;

		var div = dojo.create("div", { class: "expandAllBar", style: { float: "left"}}, tabContainer);
		dojo.create("span", { innerHTML: $I("trade.effectiveness", [this.game.getDisplayValueExt(this.game.diplomacy.getTradeRatio() * 100, false, false, 0)]) }, div);

		// expand all / collapse all panels

		var expandDiv = dojo.create("div", { class: "expandAllBar" }, tabContainer);



		var expandAll = dojo.create("a", { innerHTML: $I("common.expand.all"), href: "#" }, expandDiv);
		dojo.create("span", { innerHTML: " | " }, expandDiv );
		var collapseAll = dojo.create("a", { innerHTML: $I("common.collapse.all"), href: "#" }, expandDiv);

		dojo.create("div", { class: "clear"}, tabContainer);

		var baseTradeRatio = 1 + this.game.diplomacy.getTradeRatio();
		var currentSeason = this.game.calendar.getCurSeason().name;
		for (var i = 0; i < races.length; i++) {
			var race = races[i];
			if (!race.unlocked) {
				continue;
			}
			var tradeRatio = baseTradeRatio + this.game.diplomacy.calculateTradeBonusFromPolicies(race.name, this.game);
			var racePanel = this.racePanels[i];
			if (!racePanel) {
				racePanel = race.name === "leviathans" ? new classes.diplomacy.ui.EldersPanel(race) : new classes.diplomacy.ui.RacePanel(race);
				racePanel.setGame(this.game);
				this.racePanels.push(racePanel);
			}
			var content = racePanel.render(tabContainer);
			dojo.addClass(content, "trade-race");

			//---------- render stuff there -------------

			var leftColumn = dojo.create("div", {}, content);
			var rightColumn = dojo.create("div",{}, content);
			var clear = dojo.create("div",{}, content);
			dojo.addClass(leftColumn, "left");
			dojo.addClass(rightColumn, "right");
			dojo.addClass(clear, "clear");

			if(racePanel.feedBtn){
				var leviathansInfo = dojo.create("div", {
					innerHTML: ""
				}, leftColumn);
				this.leviathansInfo = leviathansInfo;
				dojo.place(racePanel.feedBtn.domNode, rightColumn, "first");
			}


			var buys = race.buys[0];
			var res = this.game.resPool.get(buys.name);
			dojo.create("div", {
				innerHTML: "<span class='buys'>" + $I("trade.buys") + ": </span>" + (res.title || res.name) + " <span class='tradeAmount'>" + buys.val + "</span>"
			}, leftColumn);

			for (var j = 0; j < race.sells.length; j++) {
				var s = race.sells[j];
				if (!this.game.diplomacy.isValidTrade(s, race)) {
					continue;
				}

				var res = this.game.resPool.get(s.name);
				var average = s.value * tradeRatio * (1 + race.energy * 0.02) * (1 + (s.seasons ? s.seasons[currentSeason] : 0));

				var prefix = j == 0 ? "<span class='sells'>" + $I("trade.sells") + ": </span>" : "<span class='sells'></span>";
				dojo.create("div", {
						innerHTML: prefix + (res.title || res.name) + " <span class='tradeAmount'>"
							+ this.game.getDisplayValueExt(average * (1 - s.width / 2), false, false, 0) + " - "
							+ this.game.getDisplayValueExt(average * (1 + s.width / 2), false, false, 0) + "</span>"
					}, leftColumn);
			}
			if (race.name == "zebras") {
				var zebraRelationModifierTitanium = this.game.getEffect("zebraRelationModifier") * this.game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
				var titanium = this.game.resPool.get("titanium");
				var displayedVal = this.game.getDisplayValueExt((1.5 + this.game.resPool.get("ship").value * 0.03) * (1 + zebraRelationModifierTitanium), false, false, 0);
				dojo.create("div", {
						innerHTML: "<span class='sells'></span>" + (titanium.title || titanium.name) + " <span class='tradeAmount'>" + displayedVal + " - " + displayedVal + "</span>"
					}, leftColumn);
			}

			var tradePrices = [{ name: "manpower", val: 50}, { name: "gold", val: 15}];
             tradePrices[0].val -= this.game.getEffect("tradeCatpowerDiscount");
             tradePrices[1].val -= this.game.getEffect("tradeGoldDiscount");
			tradePrices = tradePrices.concat(race.buys);

			var tradeBtn = new com.nuclearunicorn.game.ui.TradeButton({
				name: $I("trade.send.caravan"),
				description: $I("trade.send.caravan.desc"),
				prices: tradePrices,
				race: race,
				controller: new com.nuclearunicorn.game.ui.TradeButtonController(this.game),
				handler: dojo.partial(function(race){
					self.game.diplomacy.trade(race);
				}, race)
			}, this.game);

			tradeBtn.render(rightColumn);	//TODO: attach it to the panel and do a lot of update stuff
			racePanel.tradeBtn = tradeBtn;
			racePanel.race = race;
			racePanel.collapse(race.collapsed);

			//----------------------------------------------------------
			if (race.name != "leviathans") {
				var embassyButton = new classes.diplomacy.ui.EmbassyButton({
					name: $I("trade.embassy.open"),
					description: $I("trade.embassy.desc"),
					prices: race.embassyPrices,
					race: race,
					controller: new classes.diplomacy.ui.EmbassyButtonController(this.game),
					handler: dojo.partial(function(race){
						self.game.diplomacy.buildEmbassy(race);
						self.game.ui.render();
					}, race)
				}, this.game);
				racePanel.embassyButton = embassyButton;
				embassyButton.render(rightColumn);
			} else{
				var autoPinnedButton = new classes.diplomacy.ui.autoPinnedButton({
					name: $I("trade.autopinned.labelOff"),
					description: $I("trade.autopinned.desc"),
					race: race,
					controller: new classes.diplomacy.ui.autoPinnedButtonController(this.game),
					handler: dojo.partial(function(race){
						race.autoPinned = !race.autoPinned;
						self.game.ui.render();
					}, race)
					}, this.game);
					racePanel.autoPinnedButton = autoPinnedButton;
					autoPinnedButton.render(rightColumn);
			}

			if (racePanel.buyBcoin && racePanel.sellBcoin) {
				var tradePanel = dojo.create("div", {className:"crypto-trade" /*, style:{display:"none"}*/ }, null);
				dojo.place(tradePanel, rightColumn, "last");

				dojo.place(racePanel.buyBcoin.domNode, tradePanel, "last");
				dojo.place(racePanel.sellBcoin.domNode, tradePanel, "last");
			}

			if (racePanel.crashBcoin) {
				dojo.place(racePanel.crashBcoin.domNode, rightColumn, "last");
			}
		}

		//-----------------	race panels must be created fist -------------
		dojo.connect(collapseAll, "onclick", this, function(){
			for (var i in this.racePanels) {
				this.racePanels[i].collapse(true);
			}
		});
		dojo.connect(expandAll, "onclick", this, function(){
			for (var i in this.racePanels) {
				this.racePanels[i].collapse(false);
			}
		});

		//------------------------------------

		dojo.create("div", { style: {
				marginBottom: "15px"
		} }, tabContainer);

		var exploreBtn = new classes.trade.ui.SendExplorersButton({
			name: $I("trade.send.explorers"),
			description: $I("trade.send.explorers.desc"),
			prices: [{ name: "manpower", val: 1000}],
			controller: new classes.trade.ui.SendExplorersButtonController(this.game)
		}, this.game);
		exploreBtn.render(tabContainer);
		this.exploreBtn = exploreBtn;

		var clear1 = dojo.create("div",{}, tabContainer);
		dojo.addClass(clear1, "clear");

		this.update();
	},


	update: function(){
		this.inherited(arguments);

		for (var i = 0; i < this.racePanels.length; i++){
			this.racePanels[i].update();
		}

		if (this.exploreBtn){
			this.exploreBtn.update();
		}

		if (this.leviathansInfo) {
			var leviathans = this.game.diplomacy.get("leviathans");
			var markerCap = Math.floor(
				(this.game.religion.getZU("marker").getEffectiveValue(this.game) * 5 + 5) *
				(1 + this.game.getEffect("leviathansEnergyModifier"))
			);
			var leviathansInfoEnergy = leviathans.energy ? leviathans.energy + " / " + markerCap : "N/A";
			this.leviathansInfo.innerHTML = $I("trade.leviathans.energy") + leviathansInfoEnergy +
				"<br />" + $I("trade.leviathans.timeToLeave") + this.game.toDisplayDays(leviathans.duration);

			if (this.game.science.get("antimatter").researched){
				this.leviathansInfo.innerHTML += "<br /> " + $I("trade.bcoin.price") + " <span style='cursor:pointer' title='" + this.game.calendar.cryptoPrice + "'>" +
					this.game.getDisplayValueExt(this.game.calendar.cryptoPrice, false, false, 5) + "R</span>";
			}
		}

		this.updateTab();
	},

	updateTab: function() {
		this.tabName = $I("tab.name.trade");
		if (this.game.diplomacy.get("leviathans").unlocked) {
			this.tabName += $I("common.warning");
		}
		if (this.domNode) {
			this.domNode.innerHTML = this.tabName;
		}
	}
});
