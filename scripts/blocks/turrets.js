// This file contains all the custom turrets in the game 
/*
const laserTurret = extend(PowerTurret, "laser-turret", {
    init() {
        this.super$init();
    },
    icons() {
        return [
            Core.atlas.find("block-3"),
            Core.atlas.find(this.name)
        ];
    }
});

laserTurret.buildType = prov(() => extend(PowerTurret.PowerTurretBuild, laserTurret, {
    draw() {
        this.super$draw();
        Draw.color(Color.purple);
        Draw.alpha(0.5);
        Lines.lineAngle(this.x, this.y, this.rotation, laserTurret.range);
        Draw.reset();
    },
    updateTile() {
        this.super$updateTile();
        if (this.cons.valid()) {
            // Logic for shooting laser
            if (this.isShooting()) {
                this.shootLaser();
            }
        }
    },
    shootLaser() {
        // Laser shooting logic
        const target = Units.closestEnemy(this.team, this.x, this.y, laserTurret.range, u => u.checkTarget(true, true));
        if (target) {
            target.damage(100 * Time.delta);
            Fx.laserShoot.at(target.x, target.y);
        }
    }
}));

laserTurret.shootType = extend(BasicBulletType, {
    speed: 4,
    damage: 100,
    lifetime: 60,
    width: 8,
    height: 8,
    frontColor: Color.purple,
    backColor: Color.darkPurple,
    hitEffect: Fx.hitLaser,
    despawnEffect: Fx.none,
    shootEffect: Fx.shootSmall,
    smokeEffect: Fx.none
});
laserTurret.consumes.power(10);
laserTurret.range = 600;
laserTurret.reload = 1;
laserTurret.shots = 2;
laserTurret.health = 3000;*/

/*meltdown = new LaserTurret("meltdown"){{
            requirements(Category.turret, with(Items.copper, 1200, Items.lead, 350, Items.graphite, 300, Items.surgeAlloy, 325, Items.silicon, 325));
            shootEffect = Fx.shootBigSmoke2;
            shootCone = 40f;
            recoil = 4f;
            size = 4;
            shake = 2f;
            range = 195f;
            reload = 90f;
            firingMoveFract = 0.5f;
            shootDuration = 230f;
            shootSound = Sounds.laserbig;
            loopSound = Sounds.beam;
            loopSoundVolume = 2f;
            envEnabled |= Env.space;

            shootType = new ContinuousLaserBulletType(78){{
                length = 200f;
                hitEffect = Fx.hitMeltdown;
                hitColor = Pal.meltdownHit;
                status = StatusEffects.melting;
                drawSize = 420f;
                timescaleDamage = true;

                incendChance = 0.4f;
                incendSpread = 5f;
                incendAmount = 1;
                ammoMultiplier = 1f;
            }};

            scaledHealth = 200;
            coolant = consumeCoolant(0.5f);
            consumePower(17f);
        }};*/

        /*const wispion = extend(LaserTurret, "Wispion", {
            requirements: ItemStack.with(Items.copper, 1000, Items.lead, 300, Items.graphite, 250, Items.surgeAlloy, 275, Items.silicon, 275),
            shootEffect: Fx.shootBigSmoke2,
            shootCone: 40,
            recoil: 3,
            size: 3, // 3x3 space
            shake: 5, //Meltdown is 2
            range: 180,
            reload: 60, // Shorter cool down time
            firingMoveFract: 0.5,
            shootDuration: 200,
            shootSound: Sounds.laserbig,
            loopSound: Sounds.beam,
            loopSoundVolume: 2,
            envEnabled: Env.space,
            shootType: extend(ContinuousLaserBulletType, {
                damage: 70,
                length: 180,
                hitEffect: Fx.hitMeltdown,
                hitColor: Color.purple,
                status: StatusEffects.melting,
                drawSize: 400,
                timescaleDamage: true,
                incendChance: 0.4,
                incendSpread: 5,
                incendAmount: 1,
                ammoMultiplier: 1
            }),
            scaledHealth: 180,
            coolant: consumeCoolant(0.5),
            consumePower: 15,
            update() {
                this.super$update();
                if (this.liquids.current() === Liquids.cryofluid) {
                    this.range = 220; // Increase range when using cryofluid
                } else {
                    this.range = 180; // Default range
                }
            },
            icons() {
                return [
                    Core.atlas.find("block-3"),
                    Core.atlas.find(this.name)
                ];
            }
        });*/

        const energyBall = extend(BasicBulletType,{});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 10;
energyBall.lifetime = 100;
energyBall.damage = 999999999;

const c = extend(BasicBulletType,{});
c.shootEffect = Fx.none;
c.smokeEffect = Fx.none;
c.speed = 5;
c.lifetime = 15;
c.damage = 999999999;

const p = extend(BasicBulletType,{});//LiquidBulletType
//p.liquid = Vars.content.getByName(ContentType.liquid, "cheat-x250")
p.shootEffect = Fx.none;
p.smokeEffect = Fx.neoplasmSplat;
p.speed = 5;
p.lifetime = 15;
p.damage = 999999999;

energyBall.fragBullets = 10;
energyBall.fragBullet = c;
p.fragBullets = 16;
c.fragBullet = p;

const turret = extend(ItemTurret,"turret",{
 init(){
  this.ammo(
    Vars.content.getByName(ContentType.item, "copper"), energyBall,
    Vars.content.getByName(ContentType.item, "beryllium"), energyBall
  );
  this.super$init();
 },
 icons(){
  return [
  Core.atlas.find("block-1"),
  Core.atlas.find(this.name)
  ];
 }
});
turret.buildType = prov(()=>extend(ItemTurret.ItemTurretBuild,turret,{
  
}));
turret.itemCapacity=100000000;
turret.range = 600;
turret.reload = 1;
turret.shots = 2;
turret.health = 900000000;
