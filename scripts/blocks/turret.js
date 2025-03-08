const turret = extend(LaserTurret, "Wispion", {
            init() {
                this.ammo(
                    new ContinuousLaserBulletType(78, 200, {
                        hitEffect: Fx.hitwispion,
                        hitColor: Pal.wispionHit,
                        status: StatusEffects.melting,
                        drawSize: 420,
                        timescaleDamage: true,
                        incendChance: 0.4,
                        incendSpread: 5,
                        incendAmount: 1,
                        ammoMultiplier: 1
                    })
                );
                this.super$init();
            },
            icons() {
                return [
                    Core.atlas.find("block-3"),
                    Core.atlas.find(this.name)
                ];
            }
        });

        wispion.buildType = prov(() => extend(LaserTurret.LaserTurretBuild, wispion, {}));
        wispion.requirements = ItemStack.with(
            Items.copper, 1200,
            Items.lead, 350,
            Items.graphite, 300,
            Items.surgeAlloy, 325,
            Items.silicon, 325
        );
        wispion.shootEffect = Fx.shootBigSmoke2;
        wispion.shootCone = 40;
        wispion.recoil = 4;
        wispion.size = 4;
        wispion.shake = 2;
        wispion.range = 195;
        wispion.reload = 90;
        wispion.firingMoveFract = 0.5;
        wispion.shootDuration = 230;
        wispion.shootSound = Sounds.laserbig;
        wispion.loopSound = Sounds.beam;
        wispion.loopSoundVolume = 2;
        wispion.envEnabled |= Env.space;
        wispion.scaledHealth = 200;
        wispion.coolant = consumeCoolant(0.5);
        wispion.consumePower(17);
