if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'HackSlashIdle'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'HackSlashIdle'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'HackSlashIdle'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'HackSlashIdle'.");
}
var HackSlashIdle = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Math_0 = Math;
  var throwUPAE = Kotlin.throwUPAE;
  var Unit = Kotlin.kotlin.Unit;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var throwCCE = Kotlin.throwCCE;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var currentTimeMillis = $module$kotlinx_html_js.kotlinx.html.currentTimeMillis;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var tr = $module$kotlinx_html_js.kotlinx.html.js.tr_9pz0lc$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var tr_0 = $module$kotlinx_html_js.kotlinx.html.tr_gqplvg$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Exception = Kotlin.kotlin.Exception;
  var Random = Kotlin.kotlin.random.Random;
  var numberToInt = Kotlin.numberToInt;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var b = $module$kotlinx_html_js.kotlinx.html.b_r0mnq7$;
  AttributeEffectType.prototype = Object.create(Enum.prototype);
  AttributeEffectType.prototype.constructor = AttributeEffectType;
  AttributeType.prototype = Object.create(Enum.prototype);
  AttributeType.prototype.constructor = AttributeType;
  IdNotFoundException.prototype = Object.create(Exception.prototype);
  IdNotFoundException.prototype.constructor = IdNotFoundException;
  AttributeNotFoundException.prototype = Object.create(Exception.prototype);
  AttributeNotFoundException.prototype.constructor = AttributeNotFoundException;
  LocationNotFoundException.prototype = Object.create(Exception.prototype);
  LocationNotFoundException.prototype.constructor = LocationNotFoundException;
  MsgType.prototype = Object.create(Enum.prototype);
  MsgType.prototype.constructor = MsgType;
  function main(args) {
    println('Starting gameLoop...');
    Game_getInstance().gameLoop();
  }
  function Attribute(baseValue, type) {
    this.baseValue_0 = baseValue;
    this.type = type;
    this._value_1fft4c$_0 = new IdFloatBinding(this.baseValue_0, 'attr' + this.type.name);
    this._attributeEffects_0 = ArrayList_init();
    this._isDirty_0 = true;
  }
  var Attribute$_value_metadata = new PropertyMetadata('_value');
  Object.defineProperty(Attribute.prototype, '_value_0', {
    get: function () {
      return this._value_1fft4c$_0.getValue_lrcp0p$(this, Attribute$_value_metadata);
    },
    set: function (_value) {
      this._value_1fft4c$_0.setValue_9rddgb$(this, Attribute$_value_metadata, _value);
    }
  });
  Object.defineProperty(Attribute.prototype, 'value', {
    get: function () {
      if (this._isDirty_0) {
        this._value_0 = this.calculateValue_0();
        this._isDirty_0 = false;
      }
      return this._value_0;
    }
  });
  Attribute.prototype.calculateValue_0 = function () {
    var calcValue = {v: this.baseValue_0};
    var $receiver = this._attributeEffects_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.type === AttributeEffectType$INCREMENT_getInstance())
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      calcValue.v += element_0.value;
      var x = calcValue.v * 100;
      calcValue.v = Math_0.floor(x) / 100;
    }
    var $receiver_0 = this._attributeEffects_0;
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (element_1.type === AttributeEffectType$PERCENTAGE_getInstance())
        destination_0.add_11rb$(element_1);
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      calcValue.v *= element_2.value;
      var x_0 = calcValue.v * 100;
      calcValue.v = Math_0.floor(x_0) / 100;
    }
    return calcValue.v;
  };
  Attribute.prototype.recalculateValue = function () {
    this._value_0 = this.calculateValue_0();
    this._isDirty_0 = false;
  };
  Attribute.prototype.applyAttributeEffect_e7t91x$ = function (effect) {
    this._attributeEffects_0.add_11rb$(effect);
    this._isDirty_0 = true;
  };
  Attribute.prototype.removeAttributeEffectsBySource_efis4m$ = function (source) {
    var $receiver = this._attributeEffects_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.source, source))
        destination.add_11rb$(element);
    }
    this._attributeEffects_0 = toMutableList(destination);
    this._isDirty_0 = true;
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: []
  };
  function AttributeEffect(source, type, value) {
    this.source = source;
    this.type = type;
    this.value = value;
  }
  AttributeEffect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeEffect',
    interfaces: []
  };
  AttributeEffect.prototype.component1 = function () {
    return this.source;
  };
  AttributeEffect.prototype.component2 = function () {
    return this.type;
  };
  AttributeEffect.prototype.component3 = function () {
    return this.value;
  };
  AttributeEffect.prototype.copy_c2fosw$ = function (source, type, value) {
    return new AttributeEffect(source === void 0 ? this.source : source, type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  AttributeEffect.prototype.toString = function () {
    return 'AttributeEffect(source=' + Kotlin.toString(this.source) + (', type=' + Kotlin.toString(this.type)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AttributeEffect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AttributeEffect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
  function AttributeEffectType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AttributeEffectType_initFields() {
    AttributeEffectType_initFields = function () {
    };
    AttributeEffectType$INCREMENT_instance = new AttributeEffectType('INCREMENT', 0);
    AttributeEffectType$PERCENTAGE_instance = new AttributeEffectType('PERCENTAGE', 1);
  }
  var AttributeEffectType$INCREMENT_instance;
  function AttributeEffectType$INCREMENT_getInstance() {
    AttributeEffectType_initFields();
    return AttributeEffectType$INCREMENT_instance;
  }
  var AttributeEffectType$PERCENTAGE_instance;
  function AttributeEffectType$PERCENTAGE_getInstance() {
    AttributeEffectType_initFields();
    return AttributeEffectType$PERCENTAGE_instance;
  }
  AttributeEffectType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeEffectType',
    interfaces: [Enum]
  };
  function AttributeEffectType$values() {
    return [AttributeEffectType$INCREMENT_getInstance(), AttributeEffectType$PERCENTAGE_getInstance()];
  }
  AttributeEffectType.values = AttributeEffectType$values;
  function AttributeEffectType$valueOf(name) {
    switch (name) {
      case 'INCREMENT':
        return AttributeEffectType$INCREMENT_getInstance();
      case 'PERCENTAGE':
        return AttributeEffectType$PERCENTAGE_getInstance();
      default:throwISE('No enum constant hsl.core.AttributeEffectType.' + name);
    }
  }
  AttributeEffectType.valueOf_61zpoe$ = AttributeEffectType$valueOf;
  function AttributeEffectSource() {
  }
  AttributeEffectSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AttributeEffectSource',
    interfaces: []
  };
  function AttributeType(name, ordinal, displayName) {
    Enum.call(this);
    this.displayName = displayName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AttributeType_initFields() {
    AttributeType_initFields = function () {
    };
    AttributeType$DMG_instance = new AttributeType('DMG', 0, 'Damage');
    AttributeType$APS_instance = new AttributeType('APS', 1, 'Aps');
  }
  var AttributeType$DMG_instance;
  function AttributeType$DMG_getInstance() {
    AttributeType_initFields();
    return AttributeType$DMG_instance;
  }
  var AttributeType$APS_instance;
  function AttributeType$APS_getInstance() {
    AttributeType_initFields();
    return AttributeType$APS_instance;
  }
  AttributeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeType',
    interfaces: [Enum]
  };
  function AttributeType$values() {
    return [AttributeType$DMG_getInstance(), AttributeType$APS_getInstance()];
  }
  AttributeType.values = AttributeType$values;
  function AttributeType$valueOf(name) {
    switch (name) {
      case 'DMG':
        return AttributeType$DMG_getInstance();
      case 'APS':
        return AttributeType$APS_getInstance();
      default:throwISE('No enum constant hsl.core.AttributeType.' + name);
    }
  }
  AttributeType.valueOf_61zpoe$ = AttributeType$valueOf;
  function Game() {
    Game_instance = this;
    this.Hero = new Hero();
    this.World = new World();
    this.currentLocationId_0 = 1;
    this.Logger = new Logger('logContainer');
    this.CurrentMonster_mrunk1$_0 = this.CurrentMonster_mrunk1$_0;
    this.monsterIsSpawned_0 = false;
    this.CurrentMonsterCard_kno87j$_0 = this.CurrentMonsterCard_kno87j$_0;
    this.firstStart_0 = true;
    this.dungeonsUnlocked_0 = false;
    this.masterUnlocked_0 = false;
    this.isAtLocation_0 = false;
    this.lastAutoAttack_0 = 0.0;
    this.fps_0 = 30.0;
    this.interval_0 = 1000.0 / this.fps_0;
    this.lastTime_0 = (new Date()).getMilliseconds();
    this.currentTime_0 = 0;
    this.deltaTime_0 = 0;
    this.DEBUG = false;
    this.refreshAttributeTable();
    this.initUpgradeButtons_0();
    this.initLocationList_0();
    if (this.firstStart_0) {
      this.goToLocation_za3lpa$(1);
    }
    this.fCount = 0;
  }
  Game.prototype.addXp = function () {
    var tmp$;
    tmp$ = this.Hero;
    tmp$.Xp = tmp$.Xp + 1000 | 0;
  };
  Object.defineProperty(Game.prototype, 'CurrentMonster_0', {
    get: function () {
      if (this.CurrentMonster_mrunk1$_0 == null)
        return throwUPAE('CurrentMonster');
      return this.CurrentMonster_mrunk1$_0;
    },
    set: function (CurrentMonster) {
      this.CurrentMonster_mrunk1$_0 = CurrentMonster;
    }
  });
  Object.defineProperty(Game.prototype, 'CurrentMonsterCard_0', {
    get: function () {
      if (this.CurrentMonsterCard_kno87j$_0 == null)
        return throwUPAE('CurrentMonsterCard');
      return this.CurrentMonsterCard_kno87j$_0;
    },
    set: function (CurrentMonsterCard) {
      this.CurrentMonsterCard_kno87j$_0 = CurrentMonsterCard;
    }
  });
  Game.prototype.initLocationList_0 = function () {
    var tmp$;
    tmp$ = document.getElementById('locationList');
    if (tmp$ == null) {
      throw new IdNotFoundException('locationList');
    }
    var locationList = tmp$;
    var tmp$_0;
    tmp$_0 = Game_getInstance().World.getLocations().iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      locationList.append(LocationListElementGenerator_getInstance().generateElement_yw5djh$(element));
    }
  };
  function Game$gameLoop$lambda(this$Game) {
    return function (it) {
      this$Game.gameLoop();
      return Unit;
    };
  }
  Game.prototype.gameLoop = function () {
    window.requestAnimationFrame(Game$gameLoop$lambda(this));
    this.currentTime_0 = (new Date()).getMilliseconds();
    this.deltaTime_0 = this.currentTime_0 - this.lastTime_0 | 0;
    if (this.deltaTime_0 > this.interval_0) {
      this.fCount = this.fCount + 1 | 0;
      this.updateUpgradeButtons_0();
    }
    if (this.fCount % 30 === 0)
      this.scrollAutoScrollContainers_0();
    if (!this.monsterIsSpawned_0 && this.isAtLocation_0) {
      this.spawnMonster_0();
    }
    if (this.monsterIsSpawned_0 && this.isAtLocation_0) {
      this.handleAutoAttack_0();
    }
    this.checkUnlocks_0();
  };
  Game.prototype.goToLocation_za3lpa$ = function (locationId) {
    var tmp$;
    (tmp$ = document.getElementById('locationSelectionContainer')) != null ? addClass(tmp$, ['d-none']) : null;
    var locationContainer = document.getElementById('locationContainer');
    var locationElement = LocationElementGenerator_getInstance().generateElement_yw5djh$(this.World.getLocationById_za3lpa$(locationId));
    locationContainer != null ? removeClass(locationContainer, ['d-none']) : null;
    locationContainer != null ? (locationContainer.append(locationElement), Unit) : null;
    this.isAtLocation_0 = true;
  };
  Game.prototype.leaveCurrentLocation = function () {
    var tmp$;
    (tmp$ = document.getElementById('locationSelectionContainer')) != null ? removeClass(tmp$, ['d-none']) : null;
    var locationContainer = document.getElementById('locationContainer');
    locationContainer != null ? addClass(locationContainer, ['d-none']) : null;
    locationContainer != null ? (clear(locationContainer), Unit) : null;
    this.despawnMonster_0();
    this.currentLocationId_0 = 0;
    this.isAtLocation_0 = false;
  };
  Game.prototype.spawnMonster_0 = function () {
    this.CurrentMonster_0 = MonsterGenerator_getInstance().generateMonster_za3lpa$(1);
    this.CurrentMonsterCard_0 = this.createMonsterCard_0(this.CurrentMonster_0);
    this.monsterIsSpawned_0 = true;
  };
  Game.prototype.createMonsterCard_0 = function (monster) {
    var tmp$;
    var cardDiv = MonsterCardGenerator_getInstance().generateMonsterCard_lm0ins$(monster);
    (tmp$ = document.getElementById('monsterCardContainer')) != null ? (tmp$.append(cardDiv), Unit) : null;
    return cardDiv;
  };
  Game.prototype.handleMonsterAttack = function () {
    var died = this.Hero.attack_lm0ins$(this.CurrentMonster_0);
    this.updateMonsterHealthBar_0(this.CurrentMonster_0);
    if (died) {
      this.destroyMonsterCard_0();
      this.monsterIsSpawned_0 = false;
    }
  };
  Game.prototype.updateMonsterHealthBar_0 = function (monster) {
    var tmp$;
    var bar = Kotlin.isType(tmp$ = document.getElementById('monsterHealthBar'), HTMLDivElement) ? tmp$ : throwCCE();
    var hpPercent = monster.currentHealth / monster.maxHealth * 100;
    var str = hpPercent.toString() + '%';
    bar.style.width = str;
  };
  Game.prototype.destroyMonsterCard_0 = function () {
    var tmp$;
    (tmp$ = this.CurrentMonsterCard_0.parentNode) != null ? (clear(tmp$), Unit) : null;
  };
  Game.prototype.despawnMonster_0 = function () {
    this.destroyMonsterCard_0();
    this.monsterIsSpawned_0 = false;
  };
  Game.prototype.checkUnlocks_0 = function () {
    var tmp$;
    if (this.Hero.Xp >= 10 && !this.masterUnlocked_0) {
      (tmp$ = document.getElementById('masterTabContainer')) != null ? removeClass(tmp$, ['d-none']) : null;
      this.Logger.logMsg_uzephu$(MsgType$EVENT_getInstance(), 'Yay! From now on I have to be on call for teaching you skills and stuff... k thx.');
      this.masterUnlocked_0 = true;
    }
    if (this.Hero.Level >= 10 && !this.dungeonsUnlocked_0) {
      this.dungeonsUnlocked_0 = true;
    }
  };
  Game.prototype.refreshAttributeTable = function () {
    var tmp$;
    tmp$ = document.getElementById('attributeTableBody');
    if (tmp$ == null) {
      throw Exception_init('id: attributeTableBody not found');
    }
    var attributeTable = tmp$;
    clear(attributeTable);
    var tmp$_0;
    tmp$_0 = this.Hero.Attributes.values.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var attrRow = AttributeTableRowGenerator_getInstance().generateAttributeTableRow_led6iu$(element);
      attributeTable.append(attrRow);
    }
    this.Hero.recalculateAttributes();
  };
  function Game$initUpgradeButtons$lambda(this$Game, closure$id, closure$upgrade, closure$upgradeContainer, closure$button) {
    return function (it) {
      var tmp$, tmp$_0;
      Master_getInstance().buyUpgrade_rsyqya$(this$Game.Hero, closure$id);
      tmp$_0 = Kotlin.isType(tmp$ = closure$button, HTMLButtonElement) ? tmp$ : throwCCE();
      this$Game.updateUpgradeButton_cmzi4w$(closure$upgrade, closure$upgradeContainer, tmp$_0);
      return Unit;
    };
  }
  Game.prototype.initUpgradeButtons_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = document.getElementById('upgradeButtonsContainer');
    if (tmp$ == null) {
      return;
    }
    var container = tmp$;
    tmp$_0 = Master_getInstance().upgrades.entries.iterator();
    while (tmp$_0.hasNext()) {
      var kvp = tmp$_0.next();
      var id = kvp.key;
      var upgrade = kvp.value;
      var upgradeContainer = UpgradeButtonGenerator_getInstance().generateUpgradeButton_ejzugi$(upgrade);
      var button = first(asList(upgradeContainer.getElementsByClassName('upgrade-button')));
      container.append(upgradeContainer);
      button.addEventListener('click', Game$initUpgradeButtons$lambda(this, id, upgrade, upgradeContainer, button));
      upgrade.updatePriceTag();
    }
  };
  Game.prototype.scrollAutoScrollContainers_0 = function () {
    var scrollContainer = document.getElementsByClassName('auto-scroll');
    var tmp$;
    tmp$ = asList(scrollContainer).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var isScrolled = (element.scrollHeight - element.clientHeight | 0) > element.scrollTop + 50;
      if (!isScrolled) {
        element.scrollTop = element.scrollHeight - element.clientHeight | 0;
      }
    }
  };
  Game.prototype.updateUpgradeButtons_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = document.getElementById('master-tab');
    if (tmp$ == null) {
      return;
    }
    var masterTab = tmp$;
    if (!hasClass(masterTab, 'active'))
      return;
    tmp$_0 = document.getElementById('upgradeButtonsContainer');
    if (tmp$_0 == null) {
      return;
    }
    var container = tmp$_0;
    var tmp$_1;
    tmp$_1 = asList(container.getElementsByClassName('btn-group')).iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_2, tmp$_3;
      var button = first(asList(element.getElementsByClassName('upgrade-button')));
      tmp$_2 = button.getAttribute('upgrade-id');
      if (tmp$_2 == null) {
        return;
      }
      var id = tmp$_2;
      tmp$_3 = Master_getInstance().upgrades.get_11rb$(toInt(id));
      if (tmp$_3 == null) {
        return;
      }
      var upgrade = tmp$_3;
      if (upgrade.gradesBought >= upgrade.grades || upgrade.calculatePrice() > this.Hero.Xp) {
        button.setAttribute('disabled', 'disabled');
      }
       else {
        button.removeAttribute('disabled');
      }
      if (!upgrade.enabled) {
        addClass(element, ['d-none']);
      }
       else {
        removeClass(element, ['d-none']);
      }
    }
  };
  Game.prototype.handleAutoAttack_0 = function () {
    var tmp$, tmp$_0;
    var aps = (tmp$_0 = (tmp$ = this.Hero.Attributes.get_11rb$(AttributeType$APS_getInstance())) != null ? tmp$.value : null) != null ? tmp$_0 : 0.0;
    if (aps <= 0)
      return;
    var now = currentTimeMillis().toNumber() / 1000.0;
    var delta = now - this.lastAutoAttack_0;
    if (delta >= 1.0 / aps) {
      this.handleMonsterAttack();
      this.lastAutoAttack_0 = now;
    }
  };
  Game.prototype.updateUpgradeButton_cmzi4w$ = function (upgrade, upgradeContainer, button) {
    if (upgrade.grades > 1) {
      button.innerHTML = upgrade.name + ' ' + (upgrade.gradesBought + 1 | 0);
      upgrade.updatePriceTag();
    }
  };
  Game.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Game',
    interfaces: []
  };
  var Game_instance = null;
  function Game_getInstance() {
    if (Game_instance === null) {
      new Game();
    }
    return Game_instance;
  }
  function Hero() {
    this.Level_xpggig$_0 = new IdIntBinding(1, 'heroLevel');
    this.Gold_cm5py0$_0 = new IdIntBinding(0, 'heroGold');
    this.Xp_ppixjk$_0 = new IdIntBinding(0, 'heroXp');
    this.Attributes = mutableMapOf([to(AttributeType$DMG_getInstance(), new Attribute(1.0, AttributeType$DMG_getInstance()))]);
  }
  var Hero$Level_metadata = new PropertyMetadata('Level');
  Object.defineProperty(Hero.prototype, 'Level', {
    get: function () {
      return this.Level_xpggig$_0.getValue_lrcp0p$(this, Hero$Level_metadata);
    },
    set: function (Level) {
      this.Level_xpggig$_0.setValue_9rddgb$(this, Hero$Level_metadata, Level);
    }
  });
  var Hero$Gold_metadata = new PropertyMetadata('Gold');
  Object.defineProperty(Hero.prototype, 'Gold', {
    get: function () {
      return this.Gold_cm5py0$_0.getValue_lrcp0p$(this, Hero$Gold_metadata);
    },
    set: function (Gold) {
      this.Gold_cm5py0$_0.setValue_9rddgb$(this, Hero$Gold_metadata, Gold);
    }
  });
  var Hero$Xp_metadata = new PropertyMetadata('Xp');
  Object.defineProperty(Hero.prototype, 'Xp', {
    get: function () {
      return this.Xp_ppixjk$_0.getValue_lrcp0p$(this, Hero$Xp_metadata);
    },
    set: function (Xp) {
      this.Xp_ppixjk$_0.setValue_9rddgb$(this, Hero$Xp_metadata, Xp);
    }
  });
  Hero.prototype.attack_lm0ins$ = function (monster) {
    var tmp$, tmp$_0;
    var damage = (tmp$_0 = (tmp$ = this.Attributes.get_11rb$(AttributeType$DMG_getInstance())) != null ? tmp$.value : null) != null ? tmp$_0 : 0.0;
    var died = monster.dealDamage_mx4ult$(damage);
    if (died) {
      Game_getInstance().Logger.logMsg_uzephu$(MsgType$COMBAT_getInstance(), 'There has been a tragic and unforeseeable death: ' + monster);
      this.Gold = this.Gold + monster.getGold() | 0;
      this.Xp = this.Xp + monster.getXp() | 0;
    }
    return died;
  };
  Hero.prototype.addAttribute_ub91zl$ = function (baseValue, type) {
    var attr = new Attribute(baseValue, type);
    if (this.Attributes.get_11rb$(type) != null) {
      println('AttributeType ' + type + ' already known.');
      return;
    }
    this.Attributes.put_xwzc9p$(type, attr);
    Game_getInstance().refreshAttributeTable();
  };
  Hero.prototype.addAttributeEffect_l1uk5f$ = function (attributeType, effect) {
    var tmp$;
    tmp$ = this.Attributes.get_11rb$(attributeType);
    if (tmp$ == null) {
      throw new AttributeNotFoundException(attributeType);
    }
    var attr = tmp$;
    attr.applyAttributeEffect_e7t91x$(effect);
  };
  Hero.prototype.recalculateAttributes = function () {
    println('Recalculating Attributes');
    var tmp$;
    tmp$ = this.Attributes.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.recalculateValue();
    }
  };
  Hero.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hero',
    interfaces: [AttributeEffectSource]
  };
  function Master() {
    Master_instance = this;
    this.upgrades = mapOf([to(1, new Upgrade(1, 2, 'Automatic Attacks', 'Teaches you to automatically attack.', Master$upgrades$lambda, 2, void 0, void 0, true)), to(2, new Upgrade(2, 10, 'Faster Attacks', 'Increases your attacks per second by 0.1.', Master$upgrades$lambda_0(this), void 0, 100)), to(3, new Upgrade(3, 1, 'Harder Hits', 'Increases your damage by 1.', Master$upgrades$lambda_1(this), void 0, 100, void 0, true))]);
  }
  Master.prototype.buyUpgrade_rsyqya$ = function (hero, id) {
    var tmp$;
    tmp$ = this.upgrades.get_11rb$(id);
    if (tmp$ == null) {
      return;
    }
    var upgrade = tmp$;
    if (upgrade.gradesBought >= upgrade.grades)
      return;
    if (upgrade.calculatePrice() > hero.Xp)
      return;
    if (!upgrade.enabled)
      return;
    hero.Xp = hero.Xp - upgrade.calculatePrice() | 0;
    hero.Level = hero.Level + 1 | 0;
    upgrade.effect(hero);
    upgrade.gradesBought = upgrade.gradesBought + 1 | 0;
    if (upgrade.enables !== -1) {
      this.enableUpgrade_za3lpa$(upgrade.enables);
    }
    Game_getInstance().Logger.logMsg_uzephu$(MsgType$INFO_getInstance(), 'Contrary to my expectations you learned ' + upgrade.name + '.');
  };
  Master.prototype.enableUpgrade_za3lpa$ = function (id) {
    var tmp$;
    tmp$ = this.upgrades.get_11rb$(id);
    if (tmp$ == null) {
      return;
    }
    var upgrade = tmp$;
    upgrade.enabled = true;
  };
  function Master$upgrades$lambda(it) {
    it.addAttribute_ub91zl$(0.1, AttributeType$APS_getInstance());
    return Unit;
  }
  function Master$upgrades$lambda_0(this$Master) {
    return function (it) {
      it.addAttributeEffect_l1uk5f$(AttributeType$APS_getInstance(), new AttributeEffect(this$Master, AttributeEffectType$INCREMENT_getInstance(), 0.1));
      return Unit;
    };
  }
  function Master$upgrades$lambda_1(this$Master) {
    return function (it) {
      it.addAttributeEffect_l1uk5f$(AttributeType$DMG_getInstance(), new AttributeEffect(this$Master, AttributeEffectType$INCREMENT_getInstance(), 1.0));
      return Unit;
    };
  }
  Master.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Master',
    interfaces: [AttributeEffectSource]
  };
  var Master_instance = null;
  function Master_getInstance() {
    if (Master_instance === null) {
      new Master();
    }
    return Master_instance;
  }
  function Upgrade(id, basePrice, name, tooltip, effect, enables, grades, gradesBought, enabled) {
    if (enables === void 0)
      enables = -1;
    if (grades === void 0)
      grades = 1;
    if (gradesBought === void 0)
      gradesBought = 0;
    if (enabled === void 0)
      enabled = false;
    this.id = id;
    this.basePrice = basePrice;
    this.name = name;
    this.tooltip = tooltip;
    this.effect = effect;
    this.enables = enables;
    this.grades = grades;
    this.gradesBought = gradesBought;
    this.enabled = enabled;
    this._priceTagValue_y7gpvh$_0 = new IdIntBinding(this.basePrice, 'upgrade' + this.id + 'PriceTag');
  }
  var Upgrade$_priceTagValue_metadata = new PropertyMetadata('_priceTagValue');
  Object.defineProperty(Upgrade.prototype, '_priceTagValue_0', {
    get: function () {
      return this._priceTagValue_y7gpvh$_0.getValue_lrcp0p$(this, Upgrade$_priceTagValue_metadata);
    },
    set: function (_priceTagValue) {
      this._priceTagValue_y7gpvh$_0.setValue_9rddgb$(this, Upgrade$_priceTagValue_metadata, _priceTagValue);
    }
  });
  Upgrade.prototype.updatePriceTag = function () {
    this._priceTagValue_0 = this.calculatePrice();
  };
  Upgrade.prototype.calculatePrice = function () {
    return this.basePrice + Kotlin.imul(Kotlin.imul(this.basePrice, this.gradesBought), this.gradesBought) | 0;
  };
  Upgrade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Upgrade',
    interfaces: []
  };
  Upgrade.prototype.component1 = function () {
    return this.id;
  };
  Upgrade.prototype.component2 = function () {
    return this.basePrice;
  };
  Upgrade.prototype.component3 = function () {
    return this.name;
  };
  Upgrade.prototype.component4 = function () {
    return this.tooltip;
  };
  Upgrade.prototype.component5 = function () {
    return this.effect;
  };
  Upgrade.prototype.component6 = function () {
    return this.enables;
  };
  Upgrade.prototype.component7 = function () {
    return this.grades;
  };
  Upgrade.prototype.component8 = function () {
    return this.gradesBought;
  };
  Upgrade.prototype.component9 = function () {
    return this.enabled;
  };
  Upgrade.prototype.copy_g57ugo$ = function (id, basePrice, name, tooltip, effect, enables, grades, gradesBought, enabled) {
    return new Upgrade(id === void 0 ? this.id : id, basePrice === void 0 ? this.basePrice : basePrice, name === void 0 ? this.name : name, tooltip === void 0 ? this.tooltip : tooltip, effect === void 0 ? this.effect : effect, enables === void 0 ? this.enables : enables, grades === void 0 ? this.grades : grades, gradesBought === void 0 ? this.gradesBought : gradesBought, enabled === void 0 ? this.enabled : enabled);
  };
  Upgrade.prototype.toString = function () {
    return 'Upgrade(id=' + Kotlin.toString(this.id) + (', basePrice=' + Kotlin.toString(this.basePrice)) + (', name=' + Kotlin.toString(this.name)) + (', tooltip=' + Kotlin.toString(this.tooltip)) + (', effect=' + Kotlin.toString(this.effect)) + (', enables=' + Kotlin.toString(this.enables)) + (', grades=' + Kotlin.toString(this.grades)) + (', gradesBought=' + Kotlin.toString(this.gradesBought)) + (', enabled=' + Kotlin.toString(this.enabled)) + ')';
  };
  Upgrade.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.basePrice) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.tooltip) | 0;
    result = result * 31 + Kotlin.hashCode(this.effect) | 0;
    result = result * 31 + Kotlin.hashCode(this.enables) | 0;
    result = result * 31 + Kotlin.hashCode(this.grades) | 0;
    result = result * 31 + Kotlin.hashCode(this.gradesBought) | 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    return result;
  };
  Upgrade.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.basePrice, other.basePrice) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.tooltip, other.tooltip) && Kotlin.equals(this.effect, other.effect) && Kotlin.equals(this.enables, other.enables) && Kotlin.equals(this.grades, other.grades) && Kotlin.equals(this.gradesBought, other.gradesBought) && Kotlin.equals(this.enabled, other.enabled)))));
  };
  function Monster(name, level) {
    this.name = name;
    this.level = level;
    this.maxHealth = this.level * 10.0;
    this.currentHealth_glatp7$_0 = new IdFloatBinding(this.level * 10.0, 'monsterHealth');
  }
  var Monster$currentHealth_metadata = new PropertyMetadata('currentHealth');
  Object.defineProperty(Monster.prototype, 'currentHealth', {
    get: function () {
      return this.currentHealth_glatp7$_0.getValue_lrcp0p$(this, Monster$currentHealth_metadata);
    },
    set: function (currentHealth) {
      this.currentHealth_glatp7$_0.setValue_9rddgb$(this, Monster$currentHealth_metadata, currentHealth);
    }
  });
  Monster.prototype.dealDamage_mx4ult$ = function (dmg) {
    this.currentHealth = this.currentHealth - dmg;
    if (this.currentHealth <= 0) {
      return true;
    }
    return false;
  };
  Monster.prototype.getGold = function () {
    return this.level;
  };
  Monster.prototype.getXp = function () {
    return this.level;
  };
  Monster.prototype.toString = function () {
    return this.name + ' (Level ' + this.level + ')';
  };
  Monster.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Monster',
    interfaces: []
  };
  function World() {
    this.locations_0 = mapOf_0(to(1, new Location(1, 'Meadows', to(1, 10), 3, true)));
  }
  World.prototype.getLocationById_za3lpa$ = function (id) {
    var tmp$;
    tmp$ = this.locations_0.get_11rb$(id);
    if (tmp$ == null) {
      throw new LocationNotFoundException(id.toString());
    }
    return tmp$;
  };
  World.prototype.getLocations = function () {
    return this.locations_0.values;
  };
  World.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'World',
    interfaces: []
  };
  function Location(id, name, level, dungeons, known, dungeonsFound) {
    if (known === void 0)
      known = false;
    if (dungeonsFound === void 0)
      dungeonsFound = 0;
    this.id = id;
    this.name = name;
    this.level = level;
    this.dungeons = dungeons;
    this.known = known;
    this.dungeonsFound = dungeonsFound;
  }
  Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: []
  };
  Location.prototype.component1 = function () {
    return this.id;
  };
  Location.prototype.component2 = function () {
    return this.name;
  };
  Location.prototype.component3 = function () {
    return this.level;
  };
  Location.prototype.component4 = function () {
    return this.dungeons;
  };
  Location.prototype.component5 = function () {
    return this.known;
  };
  Location.prototype.component6 = function () {
    return this.dungeonsFound;
  };
  Location.prototype.copy_ene45k$ = function (id, name, level, dungeons, known, dungeonsFound) {
    return new Location(id === void 0 ? this.id : id, name === void 0 ? this.name : name, level === void 0 ? this.level : level, dungeons === void 0 ? this.dungeons : dungeons, known === void 0 ? this.known : known, dungeonsFound === void 0 ? this.dungeonsFound : dungeonsFound);
  };
  Location.prototype.toString = function () {
    return 'Location(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', level=' + Kotlin.toString(this.level)) + (', dungeons=' + Kotlin.toString(this.dungeons)) + (', known=' + Kotlin.toString(this.known)) + (', dungeonsFound=' + Kotlin.toString(this.dungeonsFound)) + ')';
  };
  Location.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.dungeons) | 0;
    result = result * 31 + Kotlin.hashCode(this.known) | 0;
    result = result * 31 + Kotlin.hashCode(this.dungeonsFound) | 0;
    return result;
  };
  Location.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.level, other.level) && Kotlin.equals(this.dungeons, other.dungeons) && Kotlin.equals(this.known, other.known) && Kotlin.equals(this.dungeonsFound, other.dungeonsFound)))));
  };
  function AttributeTableRowGenerator() {
    AttributeTableRowGenerator_instance = this;
  }
  function AttributeTableRowGenerator$generateAttributeTableRow$lambda$lambda(closure$attr) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$attr.type.displayName);
      return Unit;
    };
  }
  function AttributeTableRowGenerator$generateAttributeTableRow$lambda$lambda_0(closure$attr) {
    return function ($receiver) {
      set_id($receiver, 'attr' + closure$attr.type.name);
      set_style($receiver, 'text-align: right');
      return Unit;
    };
  }
  function AttributeTableRowGenerator$generateAttributeTableRow$lambda(closure$attr) {
    return function ($receiver) {
      td($receiver, void 0, AttributeTableRowGenerator$generateAttributeTableRow$lambda$lambda(closure$attr));
      td($receiver, void 0, AttributeTableRowGenerator$generateAttributeTableRow$lambda$lambda_0(closure$attr));
      return Unit;
    };
  }
  AttributeTableRowGenerator.prototype.generateAttributeTableRow_led6iu$ = function (attr) {
    var row = tr(get_create(document), void 0, AttributeTableRowGenerator$generateAttributeTableRow$lambda(attr));
    return row;
  };
  AttributeTableRowGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AttributeTableRowGenerator',
    interfaces: []
  };
  var AttributeTableRowGenerator_instance = null;
  function AttributeTableRowGenerator_getInstance() {
    if (AttributeTableRowGenerator_instance === null) {
      new AttributeTableRowGenerator();
    }
    return AttributeTableRowGenerator_instance;
  }
  function LocationElementGenerator() {
    LocationElementGenerator_instance = this;
  }
  function LocationElementGenerator$generateElement$lambda$lambda$lambda(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.name);
      return Unit;
    };
  }
  function LocationElementGenerator$generateElement$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'monsterCardContainer');
    return Unit;
  }
  function LocationElementGenerator$generateElement$lambda$lambda$lambda$lambda$lambda(it) {
    Game_getInstance().leaveCurrentLocation();
    return Unit;
  }
  function LocationElementGenerator$generateElement$lambda$lambda$lambda$lambda($receiver) {
    $receiver.type = ButtonType.button;
    $receiver.unaryPlus_pdl1vz$('Leave location');
    set_onClickFunction($receiver, LocationElementGenerator$generateElement$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LocationElementGenerator$generateElement$lambda$lambda$lambda_1($receiver) {
    button($receiver, void 0, void 0, void 0, void 0, 'btn btn-primary', LocationElementGenerator$generateElement$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LocationElementGenerator$generateElement$lambda$lambda(closure$location) {
    return function ($receiver) {
      div($receiver, 'col-sm', LocationElementGenerator$generateElement$lambda$lambda$lambda(closure$location));
      div($receiver, 'col-sm', LocationElementGenerator$generateElement$lambda$lambda$lambda_0);
      div($receiver, 'col-sm', LocationElementGenerator$generateElement$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function LocationElementGenerator$generateElement$lambda(closure$location) {
    return function ($receiver) {
      div($receiver, 'row', LocationElementGenerator$generateElement$lambda$lambda(closure$location));
      return Unit;
    };
  }
  LocationElementGenerator.prototype.generateElement_yw5djh$ = function (location) {
    var element = div_0(get_create(document), void 0, LocationElementGenerator$generateElement$lambda(location));
    return element;
  };
  LocationElementGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocationElementGenerator',
    interfaces: []
  };
  var LocationElementGenerator_instance = null;
  function LocationElementGenerator_getInstance() {
    if (LocationElementGenerator_instance === null) {
      new LocationElementGenerator();
    }
    return LocationElementGenerator_instance;
  }
  function LocationListElementGenerator() {
    LocationListElementGenerator_instance = this;
  }
  function LocationListElementGenerator$generateElement$lambda$lambda(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.name);
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda$lambda_0(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.level.first.toString() + ' to ' + closure$location.level.second);
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda$lambda_1(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.dungeonsFound.toString() + '/' + closure$location.dungeons);
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda$lambda$lambda$lambda(closure$location) {
    return function (it) {
      Game_getInstance().goToLocation_za3lpa$(closure$location.id);
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda$lambda$lambda(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Explore');
      $receiver.type = ButtonType.button;
      set_onClickFunction($receiver, LocationListElementGenerator$generateElement$lambda$lambda$lambda$lambda(closure$location));
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda$lambda_2(closure$location) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-primary', LocationListElementGenerator$generateElement$lambda$lambda$lambda(closure$location));
      return Unit;
    };
  }
  function LocationListElementGenerator$generateElement$lambda(closure$location) {
    return function ($receiver) {
      td($receiver, void 0, LocationListElementGenerator$generateElement$lambda$lambda(closure$location));
      td($receiver, void 0, LocationListElementGenerator$generateElement$lambda$lambda_0(closure$location));
      td($receiver, void 0, LocationListElementGenerator$generateElement$lambda$lambda_1(closure$location));
      td($receiver, void 0, LocationListElementGenerator$generateElement$lambda$lambda_2(closure$location));
      return Unit;
    };
  }
  LocationListElementGenerator.prototype.generateElement_yw5djh$ = function (location) {
    return tr_0(get_create(document), void 0, LocationListElementGenerator$generateElement$lambda(location));
  };
  LocationListElementGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocationListElementGenerator',
    interfaces: []
  };
  var LocationListElementGenerator_instance = null;
  function LocationListElementGenerator_getInstance() {
    if (LocationListElementGenerator_instance === null) {
      new LocationListElementGenerator();
    }
    return LocationListElementGenerator_instance;
  }
  function MonsterCardGenerator() {
    MonsterCardGenerator_instance = this;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda($receiver) {
    $receiver.src = 'gfx/monster.svg';
    $receiver.alt = 'Monster';
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda(closure$monster) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$monster.name + ' (Level ' + closure$monster.level + ')');
      return Unit;
    };
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'monsterHealthBar');
    set_role($receiver, 'progressbar');
    set_style($receiver, 'width: 100%');
    $receiver.unaryPlus_pdl1vz$('Health');
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda($receiver) {
    div($receiver, 'progress-bar bg-danger', MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda_0($receiver) {
    div($receiver, 'progress', MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda_0(it) {
    Game_getInstance().handleMonsterAttack();
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda_1($receiver) {
    $receiver.type = ButtonType.button;
    set_id($receiver, 'monsterAttackButton');
    set_onClickFunction($receiver, MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('Attack');
    return Unit;
  }
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda_0(closure$monster) {
    return function ($receiver) {
      h5($receiver, 'card-title', MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda(closure$monster));
      p($receiver, 'card-text', MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda_0);
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-danger', MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function MonsterCardGenerator$generateMonsterCard$lambda(closure$monster) {
    return function ($receiver) {
      set_style($receiver, 'max-width: 20em');
      img($receiver, void 0, void 0, 'card-img-top img-fluid', MonsterCardGenerator$generateMonsterCard$lambda$lambda);
      div($receiver, 'card-body', MonsterCardGenerator$generateMonsterCard$lambda$lambda_0(closure$monster));
      return Unit;
    };
  }
  MonsterCardGenerator.prototype.generateMonsterCard_lm0ins$ = function (monster) {
    var card = div_1(get_create(document), 'card mx-auto', MonsterCardGenerator$generateMonsterCard$lambda(monster));
    return card;
  };
  MonsterCardGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MonsterCardGenerator',
    interfaces: []
  };
  var MonsterCardGenerator_instance = null;
  function MonsterCardGenerator_getInstance() {
    if (MonsterCardGenerator_instance === null) {
      new MonsterCardGenerator();
    }
    return MonsterCardGenerator_instance;
  }
  function UpgradeButtonGenerator() {
    UpgradeButtonGenerator_instance = this;
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda(closure$upgrade) {
    return function ($receiver) {
      $receiver.type = ButtonType.button;
      var $receiver_0 = $receiver.attributes;
      var key = 'upgrade-id';
      var value = closure$upgrade.id.toString();
      $receiver_0.put_xwzc9p$(key, value);
      $receiver.unaryPlus_pdl1vz$(closure$upgrade.name);
      return Unit;
    };
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda_0(closure$collapseId) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'data-toggle';
      var value = 'collapse';
      $receiver_0.put_xwzc9p$(key, value);
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'data-target';
      var value_0 = '#' + closure$collapseId.v;
      $receiver_1.put_xwzc9p$(key_0, value_0);
      i($receiver, 'fa fa-angle-down');
      return Unit;
    };
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda(closure$upgrade, closure$collapseId) {
    return function ($receiver) {
      set_role($receiver, 'group');
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-primary w-75 upgrade-button', UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda(closure$upgrade));
      button($receiver, void 0, void 0, void 0, void 0, 'btn btn-secondary', UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda_0(closure$collapseId));
      return Unit;
    };
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda_1(closure$upgrade) {
    return function ($receiver) {
      set_id($receiver, 'upgrade' + closure$upgrade.id + 'PriceTag');
      return Unit;
    };
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda_0(closure$collapseId, closure$upgrade) {
    return function ($receiver) {
      set_id($receiver, closure$collapseId.v);
      var $receiver_0 = $receiver.attributes;
      var key = 'data-parent';
      var value = '#upgradeButtonsContainer';
      $receiver_0.put_xwzc9p$(key, value);
      $receiver.unaryPlus_pdl1vz$('XP Cost: ');
      span($receiver, void 0, UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda$lambda_1(closure$upgrade));
      get_br($receiver);
      $receiver.unaryPlus_pdl1vz$(closure$upgrade.tooltip);
      return Unit;
    };
  }
  function UpgradeButtonGenerator$generateUpgradeButton$lambda(closure$upgrade) {
    return function ($receiver) {
      var collapseId = {v: 'upgrade' + closure$upgrade.id + 'Collapse'};
      set_id($receiver, 'upgrade' + closure$upgrade.id + 'Container');
      div($receiver, 'btn-group btn-group-lg w-100', UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda(closure$upgrade, collapseId));
      div($receiver, 'collapse', UpgradeButtonGenerator$generateUpgradeButton$lambda$lambda_0(collapseId, closure$upgrade));
      return Unit;
    };
  }
  UpgradeButtonGenerator.prototype.generateUpgradeButton_ejzugi$ = function (upgrade) {
    var button = div_0(get_create(document), void 0, UpgradeButtonGenerator$generateUpgradeButton$lambda(upgrade));
    return button;
  };
  UpgradeButtonGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UpgradeButtonGenerator',
    interfaces: []
  };
  var UpgradeButtonGenerator_instance = null;
  function UpgradeButtonGenerator_getInstance() {
    if (UpgradeButtonGenerator_instance === null) {
      new UpgradeButtonGenerator();
    }
    return UpgradeButtonGenerator_instance;
  }
  function MonsterGenerator() {
    MonsterGenerator_instance = this;
  }
  MonsterGenerator.prototype.generateMonster_za3lpa$ = function (level) {
    var b = level - 2 | 0;
    var lower = Math_0.max(1, b);
    var upper = level + 2 | 0;
    var generatedLevel = random(new IntRange(lower, upper));
    return new Monster('Imp', generatedLevel);
  };
  MonsterGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MonsterGenerator',
    interfaces: []
  };
  var MonsterGenerator_instance = null;
  function MonsterGenerator_getInstance() {
    if (MonsterGenerator_instance === null) {
      new MonsterGenerator();
    }
    return MonsterGenerator_instance;
  }
  function IdNotFoundException(id) {
    Exception_init('IdNotFoundException: ' + id + ' not found in document.', this);
    this.name = 'IdNotFoundException';
  }
  IdNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdNotFoundException',
    interfaces: [Exception]
  };
  function AttributeNotFoundException(type) {
    Exception_init('Attribute with ' + type + ' not found.', this);
    this.name = 'AttributeNotFoundException';
  }
  AttributeNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeNotFoundException',
    interfaces: [Exception]
  };
  function LocationNotFoundException(id) {
    Exception_init('No Location with id ' + id + ' found.', this);
    this.name = 'LocationNotFoundException';
  }
  LocationNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocationNotFoundException',
    interfaces: [Exception]
  };
  function format($receiver, digits) {
    return $receiver.format(digits);
  }
  function format_0($receiver, digits) {
    return $receiver.format(digits);
  }
  function random($receiver) {
    return numberToInt(Random.Default.nextDouble() * ($receiver.endInclusive + 1 - $receiver.start | 0) + $receiver.start);
  }
  function IdFloatBinding(initialValue, id) {
    this.id = id;
    this.value_0 = initialValue;
    var element = document.getElementById(this.id);
    if (element == null) {
      if (Game_getInstance().DEBUG)
        println('Element with id: ' + this.id + ' not found.');
    }
     else {
      element.innerHTML = format_0(this.value_0, 2);
    }
  }
  IdFloatBinding.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  IdFloatBinding.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    println('refreshing ' + this.id);
    this.value_0 = value;
    (tmp$ = document.getElementById(this.id)) != null ? (tmp$.innerHTML = value.toString()) : null;
  };
  IdFloatBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdFloatBinding',
    interfaces: [ReadWriteProperty]
  };
  function IdIntBinding(initialValue, id) {
    this.id = id;
    this.value_0 = initialValue;
    var tmp$;
    (tmp$ = document.getElementById(this.id)) != null ? (tmp$.innerHTML = this.value_0.toString()) : null;
  }
  IdIntBinding.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.value_0;
  };
  IdIntBinding.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    this.value_0 = value;
    (tmp$ = document.getElementById(this.id)) != null ? (tmp$.innerHTML = value.toString()) : null;
  };
  IdIntBinding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdIntBinding',
    interfaces: [ReadWriteProperty]
  };
  function Logger(logContainerId) {
    this.logContainerId_0 = logContainerId;
    var tmp$;
    tmp$ = document.getElementById(this.logContainerId_0);
    if (tmp$ == null) {
      throw new IdNotFoundException(this.logContainerId_0);
    }
    this.container_0 = tmp$;
  }
  function Logger$logMsg$lambda$lambda$lambda(closure$msgType) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$msgType.logString);
      return Unit;
    };
  }
  function Logger$logMsg$lambda$lambda(closure$msgType) {
    return function ($receiver) {
      b($receiver, void 0, Logger$logMsg$lambda$lambda$lambda(closure$msgType));
      return Unit;
    };
  }
  function Logger$logMsg$lambda$lambda_0(closure$msg) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$msg);
      return Unit;
    };
  }
  function Logger$logMsg$lambda(closure$msgType, closure$msg) {
    return function ($receiver) {
      div($receiver, 'col-sm-3', Logger$logMsg$lambda$lambda(closure$msgType));
      div($receiver, 'col-sm', Logger$logMsg$lambda$lambda_0(closure$msg));
      return Unit;
    };
  }
  Logger.prototype.logMsg_uzephu$ = function (msgType, msg) {
    var date = (new Date()).toDateString();
    var entry = div_0(get_create(document), 'row ' + msgType.textColorClass, Logger$logMsg$lambda(msgType, msg));
    this.container_0.append(entry);
  };
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  function MsgType(name, ordinal, logString, textColorClass) {
    Enum.call(this);
    this.logString = logString;
    this.textColorClass = textColorClass;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MsgType_initFields() {
    MsgType_initFields = function () {
    };
    MsgType$COMBAT_instance = new MsgType('COMBAT', 0, 'Combat', 'text-danger');
    MsgType$INFO_instance = new MsgType('INFO', 1, 'Info', 'text-success');
    MsgType$EVENT_instance = new MsgType('EVENT', 2, 'Event', 'text-warning');
  }
  var MsgType$COMBAT_instance;
  function MsgType$COMBAT_getInstance() {
    MsgType_initFields();
    return MsgType$COMBAT_instance;
  }
  var MsgType$INFO_instance;
  function MsgType$INFO_getInstance() {
    MsgType_initFields();
    return MsgType$INFO_instance;
  }
  var MsgType$EVENT_instance;
  function MsgType$EVENT_getInstance() {
    MsgType_initFields();
    return MsgType$EVENT_instance;
  }
  MsgType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MsgType',
    interfaces: [Enum]
  };
  function MsgType$values() {
    return [MsgType$COMBAT_getInstance(), MsgType$INFO_getInstance(), MsgType$EVENT_getInstance()];
  }
  MsgType.values = MsgType$values;
  function MsgType$valueOf(name) {
    switch (name) {
      case 'COMBAT':
        return MsgType$COMBAT_getInstance();
      case 'INFO':
        return MsgType$INFO_getInstance();
      case 'EVENT':
        return MsgType$EVENT_getInstance();
      default:throwISE('No enum constant hsl.util.MsgType.' + name);
    }
  }
  MsgType.valueOf_61zpoe$ = MsgType$valueOf;
  _.main_kand9s$ = main;
  var package$hsl = _.hsl || (_.hsl = {});
  var package$core = package$hsl.core || (package$hsl.core = {});
  package$core.Attribute = Attribute;
  package$core.AttributeEffect = AttributeEffect;
  Object.defineProperty(AttributeEffectType, 'INCREMENT', {
    get: AttributeEffectType$INCREMENT_getInstance
  });
  Object.defineProperty(AttributeEffectType, 'PERCENTAGE', {
    get: AttributeEffectType$PERCENTAGE_getInstance
  });
  package$core.AttributeEffectType = AttributeEffectType;
  package$core.AttributeEffectSource = AttributeEffectSource;
  Object.defineProperty(AttributeType, 'DMG', {
    get: AttributeType$DMG_getInstance
  });
  Object.defineProperty(AttributeType, 'APS', {
    get: AttributeType$APS_getInstance
  });
  package$core.AttributeType = AttributeType;
  Object.defineProperty(package$core, 'Game', {
    get: Game_getInstance
  });
  package$core.Hero = Hero;
  var package$master = package$core.master || (package$core.master = {});
  Object.defineProperty(package$master, 'Master', {
    get: Master_getInstance
  });
  package$master.Upgrade = Upgrade;
  package$core.Monster = Monster;
  var package$world = package$core.world || (package$core.world = {});
  package$world.World = World;
  package$world.Location = Location;
  var package$generators = package$hsl.generators || (package$hsl.generators = {});
  var package$html = package$generators.html || (package$generators.html = {});
  Object.defineProperty(package$html, 'AttributeTableRowGenerator', {
    get: AttributeTableRowGenerator_getInstance
  });
  Object.defineProperty(package$html, 'LocationElementGenerator', {
    get: LocationElementGenerator_getInstance
  });
  Object.defineProperty(package$html, 'LocationListElementGenerator', {
    get: LocationListElementGenerator_getInstance
  });
  Object.defineProperty(package$html, 'MonsterCardGenerator', {
    get: MonsterCardGenerator_getInstance
  });
  Object.defineProperty(package$html, 'UpgradeButtonGenerator', {
    get: UpgradeButtonGenerator_getInstance
  });
  Object.defineProperty(package$generators, 'MonsterGenerator', {
    get: MonsterGenerator_getInstance
  });
  var package$util = package$hsl.util || (package$hsl.util = {});
  package$util.IdNotFoundException = IdNotFoundException;
  package$util.AttributeNotFoundException = AttributeNotFoundException;
  package$util.LocationNotFoundException = LocationNotFoundException;
  package$util.format_j6vyb1$ = format;
  package$util.format_lcymw2$ = format_0;
  package$util.random_9tsm8a$ = random;
  package$util.IdFloatBinding = IdFloatBinding;
  package$core.IdIntBinding = IdIntBinding;
  package$util.Logger = Logger;
  Object.defineProperty(MsgType, 'COMBAT', {
    get: MsgType$COMBAT_getInstance
  });
  Object.defineProperty(MsgType, 'INFO', {
    get: MsgType$INFO_getInstance
  });
  Object.defineProperty(MsgType, 'EVENT', {
    get: MsgType$EVENT_getInstance
  });
  package$util.MsgType = MsgType;
  main([]);
  Kotlin.defineModule('HackSlashIdle', _);
  return _;
}(typeof HackSlashIdle === 'undefined' ? {} : HackSlashIdle, kotlin, this['kotlinx-html-js']);
