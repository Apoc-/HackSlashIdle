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
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var throwCCE = Kotlin.throwCCE;
  var currentTimeMillis = $module$kotlinx_html_js.kotlinx.html.currentTimeMillis;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var tr = $module$kotlinx_html_js.kotlinx.html.js.tr_9pz0lc$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var button_0 = $module$kotlinx_html_js.kotlinx.html.js.button_yqfwmz$;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var Exception = Kotlin.kotlin.Exception;
  var b = $module$kotlinx_html_js.kotlinx.html.b_r0mnq7$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  AttributeEffectType.prototype = Object.create(Enum.prototype);
  AttributeEffectType.prototype.constructor = AttributeEffectType;
  AttributeType.prototype = Object.create(Enum.prototype);
  AttributeType.prototype.constructor = AttributeType;
  IdNotFoundException.prototype = Object.create(Exception.prototype);
  IdNotFoundException.prototype.constructor = IdNotFoundException;
  MsgType.prototype = Object.create(Enum.prototype);
  MsgType.prototype.constructor = MsgType;
  function main(args) {
    println('Starting gameLoop...');
    Game_getInstance().gameLoop();
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
    var tmp$;
    tmp$ = this._attributeEffects_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      switch (element.type.name) {
        case 'INCREMENT':
          calcValue.v += element.value;
          break;
        case 'PERCENTAGE':
          calcValue.v *= element.value;
          break;
      }
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
    this.Logger = new Logger('logContainer');
    this.CurrentMonster_mrunk1$_0 = this.CurrentMonster_mrunk1$_0;
    this.CurrentMonsterCard_kno87j$_0 = this.CurrentMonsterCard_kno87j$_0;
    this.lastAutoAttack_0 = 0.0;
    this.fps_0 = 30.0;
    this.interval_0 = 1000.0 / this.fps_0;
    this.lastTime_0 = (new Date()).getMilliseconds();
    this.currentTime_0 = 0;
    this.deltaTime_0 = 0;
    this.DEBUG = false;
    this.spawnMonster_0();
    this.refreshAttributeTable();
    this.initUpgradeButtons_0();
    this.fCount = 0;
  }
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
      this.scollScrollContainers_0();
    this.handleAutoAttack_0();
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
  function Game$initUpgradeButtons$lambda(closure$upgrade, this$Game, closure$id) {
    return function (it) {
      println('clicked ' + closure$upgrade.name);
      Mentor_getInstance().buyUpgrade_rsyqya$(this$Game.Hero, closure$id);
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
    tmp$_0 = Mentor_getInstance().upgrades.entries.iterator();
    while (tmp$_0.hasNext()) {
      var kvp = tmp$_0.next();
      var id = kvp.key;
      var upgrade = kvp.value;
      var button = UpgradeButtonGenerator_getInstance().generateUpgradeButton_n047dd$(upgrade);
      container.append(button);
      button.addEventListener('click', Game$initUpgradeButtons$lambda(upgrade, this, id));
    }
  };
  Game.prototype.scollScrollContainers_0 = function () {
    var scrollContainer = document.getElementsByClassName('auto-scroll');
    var tmp$;
    tmp$ = asList(scrollContainer).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var isScrolled = (element.scrollHeight - element.clientHeight | 0) > element.scrollTop + 50;
      println('---');
      println(element.scrollHeight);
      println(element.clientHeight);
      println(element.scrollTop);
      println('---');
      if (!isScrolled) {
        println('scrln');
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
    tmp$_1 = asList(container.getElementsByTagName('Button')).iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_2, tmp$_3;
      tmp$_2 = element.getAttribute('upgrade-id');
      if (tmp$_2 == null) {
        return;
      }
      var id = tmp$_2;
      tmp$_3 = Mentor_getInstance().upgrades.get_11rb$(toInt(id));
      if (tmp$_3 == null) {
        return;
      }
      var upgrade = tmp$_3;
      if (upgrade.bought || upgrade.price > this.Hero.Xp) {
        element.setAttribute('disabled', 'disabled');
      }
       else {
        element.removeAttribute('disabled');
      }
      if (!upgrade.enabled) {
        addClass(element, ['d-none']);
      }
       else {
        removeClass(element, ['d-none']);
      }
    }
  };
  function Game$spawnMonster$lambda(this$Game) {
    return function (it) {
      this$Game.handleMonsterAttack_0();
      return Unit;
    };
  }
  Game.prototype.spawnMonster_0 = function () {
    var tmp$;
    this.CurrentMonster_0 = MonsterGenerator_getInstance().generateMonster_za3lpa$(1);
    this.CurrentMonsterCard_0 = this.createMonsterCard_0(this.CurrentMonster_0);
    var button = Kotlin.isType(tmp$ = document.getElementById('monsterAttackButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    button.addEventListener('click', Game$spawnMonster$lambda(this));
  };
  Game.prototype.createMonsterCard_0 = function (monster) {
    var tmp$;
    var cardDiv = MonsterCardGenerator_getInstance().generateMonsterCard_lm0ins$(monster);
    (tmp$ = document.getElementById('monsterCardContainer')) != null ? (tmp$.append(cardDiv), Unit) : null;
    return cardDiv;
  };
  Game.prototype.handleMonsterAttack_0 = function () {
    var died = this.Hero.attack_lm0ins$(this.CurrentMonster_0);
    this.updateMonsterHealthBar_0(this.CurrentMonster_0);
    if (died) {
      this.destroyMonsterCard_0();
      this.spawnMonster_0();
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
  Game.prototype.handleAutoAttack_0 = function () {
    var tmp$, tmp$_0;
    var aps = (tmp$_0 = (tmp$ = this.Hero.Attributes.get_11rb$(AttributeType$APS_getInstance())) != null ? tmp$.value : null) != null ? tmp$_0 : 0.0;
    if (aps <= 0)
      return;
    var now = currentTimeMillis().toNumber() / 1000.0;
    var delta = now - this.lastAutoAttack_0;
    if (delta >= 1.0 / aps) {
      this.handleMonsterAttack_0();
      this.lastAutoAttack_0 = now;
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
  function Mentor() {
    Mentor_instance = this;
    this.upgrades = mapOf([to(1, new Upgrade(1, 2, 1, 'Automatic Attacks [WIP]', 'Teaches you to automatically attack.', Mentor$upgrades$lambda, 2, void 0, true)), to(2, new Upgrade(2, 10, 2, '', '', Mentor$upgrades$lambda_0)), to(3, new Upgrade(3, 10, 3, '3', '', Mentor$upgrades$lambda_1))]);
  }
  Mentor.prototype.buyUpgrade_rsyqya$ = function (hero, id) {
    var tmp$;
    tmp$ = this.upgrades.get_11rb$(id);
    if (tmp$ == null) {
      return;
    }
    var upgrade = tmp$;
    if (upgrade.bought)
      return;
    if (upgrade.levelPreq > hero.Level)
      return;
    if (upgrade.price > hero.Xp)
      return;
    if (!upgrade.enabled)
      return;
    hero.Xp = hero.Xp - upgrade.price | 0;
    upgrade.effect(hero);
    upgrade.bought = true;
    if (upgrade.enables !== -1) {
      this.enableUpgrade_za3lpa$(upgrade.enables);
    }
  };
  Mentor.prototype.enableUpgrade_za3lpa$ = function (id) {
    var tmp$;
    tmp$ = this.upgrades.get_11rb$(id);
    if (tmp$ == null) {
      return;
    }
    var upgrade = tmp$;
    upgrade.enabled = true;
  };
  function Mentor$upgrades$lambda(it) {
    it.addAttribute_ub91zl$(0.1, AttributeType$APS_getInstance());
    return Unit;
  }
  function Mentor$upgrades$lambda_0(it) {
    it.addAttribute_ub91zl$(0.1, AttributeType$APS_getInstance());
    return Unit;
  }
  function Mentor$upgrades$lambda_1(it) {
    it.addAttribute_ub91zl$(0.1, AttributeType$APS_getInstance());
    return Unit;
  }
  Mentor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Mentor',
    interfaces: []
  };
  var Mentor_instance = null;
  function Mentor_getInstance() {
    if (Mentor_instance === null) {
      new Mentor();
    }
    return Mentor_instance;
  }
  function Upgrade(id, price, levelPreq, name, tooltip, effect, enables, bought, enabled) {
    if (enables === void 0)
      enables = -1;
    if (bought === void 0)
      bought = false;
    if (enabled === void 0)
      enabled = false;
    this.id = id;
    this.price = price;
    this.levelPreq = levelPreq;
    this.name = name;
    this.tooltip = tooltip;
    this.effect = effect;
    this.enables = enables;
    this.bought = bought;
    this.enabled = enabled;
  }
  Upgrade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Upgrade',
    interfaces: []
  };
  Upgrade.prototype.component1 = function () {
    return this.id;
  };
  Upgrade.prototype.component2 = function () {
    return this.price;
  };
  Upgrade.prototype.component3 = function () {
    return this.levelPreq;
  };
  Upgrade.prototype.component4 = function () {
    return this.name;
  };
  Upgrade.prototype.component5 = function () {
    return this.tooltip;
  };
  Upgrade.prototype.component6 = function () {
    return this.effect;
  };
  Upgrade.prototype.component7 = function () {
    return this.enables;
  };
  Upgrade.prototype.component8 = function () {
    return this.bought;
  };
  Upgrade.prototype.component9 = function () {
    return this.enabled;
  };
  Upgrade.prototype.copy_nll3yh$ = function (id, price, levelPreq, name, tooltip, effect, enables, bought, enabled) {
    return new Upgrade(id === void 0 ? this.id : id, price === void 0 ? this.price : price, levelPreq === void 0 ? this.levelPreq : levelPreq, name === void 0 ? this.name : name, tooltip === void 0 ? this.tooltip : tooltip, effect === void 0 ? this.effect : effect, enables === void 0 ? this.enables : enables, bought === void 0 ? this.bought : bought, enabled === void 0 ? this.enabled : enabled);
  };
  Upgrade.prototype.toString = function () {
    return 'Upgrade(id=' + Kotlin.toString(this.id) + (', price=' + Kotlin.toString(this.price)) + (', levelPreq=' + Kotlin.toString(this.levelPreq)) + (', name=' + Kotlin.toString(this.name)) + (', tooltip=' + Kotlin.toString(this.tooltip)) + (', effect=' + Kotlin.toString(this.effect)) + (', enables=' + Kotlin.toString(this.enables)) + (', bought=' + Kotlin.toString(this.bought)) + (', enabled=' + Kotlin.toString(this.enabled)) + ')';
  };
  Upgrade.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.levelPreq) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.tooltip) | 0;
    result = result * 31 + Kotlin.hashCode(this.effect) | 0;
    result = result * 31 + Kotlin.hashCode(this.enables) | 0;
    result = result * 31 + Kotlin.hashCode(this.bought) | 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    return result;
  };
  Upgrade.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.levelPreq, other.levelPreq) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.tooltip, other.tooltip) && Kotlin.equals(this.effect, other.effect) && Kotlin.equals(this.enables, other.enables) && Kotlin.equals(this.bought, other.bought) && Kotlin.equals(this.enabled, other.enabled)))));
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
  function MonsterCardGenerator$generateMonsterCard$lambda$lambda$lambda_1($receiver) {
    $receiver.type = ButtonType.button;
    set_id($receiver, 'monsterAttackButton');
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
    var card = div_0(get_create(document), 'card mx-auto', MonsterCardGenerator$generateMonsterCard$lambda(monster));
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
  function UpgradeButtonGenerator$generateUpgradeButton$lambda(closure$upgrade) {
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
  UpgradeButtonGenerator.prototype.generateUpgradeButton_n047dd$ = function (upgrade) {
    var button = button_0(get_create(document), void 0, void 0, void 0, void 0, 'btn btn-primary btn-lg btn-block', UpgradeButtonGenerator$generateUpgradeButton$lambda(upgrade));
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
    return new Monster('Imp', level);
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
  function IdFloatBinding(initialValue, id) {
    this.id = id;
    this.value_0 = initialValue;
    var element = document.getElementById(this.id);
    if (element == null) {
      if (Game_getInstance().DEBUG)
        println('Element with id: ' + this.id + ' not found.');
    }
     else {
      element.innerHTML = this.value_0.toString();
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
  function IdNotFoundException(id) {
    Exception_init('IdNotFoundException: ' + id + ' not found in document.', this);
    this.name = 'IdNotFoundException';
  }
  IdNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdNotFoundException',
    interfaces: [Exception]
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
    var entry = div_1(get_create(document), 'row ' + msgType.textColorClass, Logger$logMsg$lambda(msgType, msg));
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
  }
  var MsgType$COMBAT_instance;
  function MsgType$COMBAT_getInstance() {
    MsgType_initFields();
    return MsgType$COMBAT_instance;
  }
  MsgType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MsgType',
    interfaces: [Enum]
  };
  function MsgType$values() {
    return [MsgType$COMBAT_getInstance()];
  }
  MsgType.values = MsgType$values;
  function MsgType$valueOf(name) {
    switch (name) {
      case 'COMBAT':
        return MsgType$COMBAT_getInstance();
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
  var package$mentor = package$core.mentor || (package$core.mentor = {});
  Object.defineProperty(package$mentor, 'Mentor', {
    get: Mentor_getInstance
  });
  package$mentor.Upgrade = Upgrade;
  package$core.Monster = Monster;
  var package$generators = package$hsl.generators || (package$hsl.generators = {});
  var package$html = package$generators.html || (package$generators.html = {});
  Object.defineProperty(package$html, 'AttributeTableRowGenerator', {
    get: AttributeTableRowGenerator_getInstance
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
  package$core.IdFloatBinding = IdFloatBinding;
  package$core.IdIntBinding = IdIntBinding;
  var package$util = package$hsl.util || (package$hsl.util = {});
  package$util.IdNotFoundException = IdNotFoundException;
  package$util.Logger = Logger;
  Object.defineProperty(MsgType, 'COMBAT', {
    get: MsgType$COMBAT_getInstance
  });
  package$util.MsgType = MsgType;
  main([]);
  Kotlin.defineModule('HackSlashIdle', _);
  return _;
}(typeof HackSlashIdle === 'undefined' ? {} : HackSlashIdle, kotlin, this['kotlinx-html-js']);
