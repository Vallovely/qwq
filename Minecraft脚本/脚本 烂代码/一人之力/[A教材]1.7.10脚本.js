  var theInventoryEnderChest = player.getMCEntity().func_71005_bN();��ȡ���ĩӰ��
  var slotsCount = theInventoryEnderChest.func_70302_i_();��ȡĩӰ�����
   var itemstack = theInventoryEnderChest.func_70301_a(slot);

					��ʹ��N++�е�JavaScript���Ը�ʽ�鿴���ļ���

             ���������Ϸ������ԣ�J��ͷ��JavaScript

			                              ---------by �����͵Ľ��;�



������־:
2019.8.11/20:42���npc�������ã���
2019.8.17/18:54�����������,��Ʒ�Լ��߼����õ�����npc�����ְҵ
2019.10.4/2:12��ɸ߼������в�������:̨��,��Ӫ,��Ч.��������չ����<��δ����>:�ű�
2019.11.3/12:00��ɸ߼������в�������:�Ի���,���ȫ�������в�������:�Ի���,����չ����:�ű� ����
2019.11.16/15:13���ȫ�������в�������:npc�ϳɱ�,npc�ϳɱ�<��չ>,���:�Զ���ϳ�-<����:�޾�̰��><����:ֲ��ħ��><����:�ȼ۽���>
2019.12.4/0:09���������չ:���������ҵĲ���,LivingBase + Living��������� ��������չ:������buff,���ƶ��鲿�ֵ�ʾ���Լ�����˸���api
2020.1.7/0:06���������չ:����������Ϣ,LivingBase + Living�����������Ӹ���api�Լ�ʾ��,���������:���θ�������<����>
2020.9.16/1:35�Ż����ַ����Լ�����,��Ӳ��ַ���//���θ�������<����>����
2021.1.16/17:19�����޸��¼�����,��� �رնԻ��¼� �Լ� �Ի��¼� ���ñ���
	
[npc:
 {��������
  executeCommand("")
  ��NPC����ָ��,ָ����󲻻ᱨ��npc.executeCommand("tellraw @a hhaha")��
 	
  getHomeX()
  ��ȡNPC�ҵ�X���꡾npc.getHomeX()��
 	
  setHomeX()
  ����NPC�ҵ�X����
 	
  getHomeY()
  ��ȡNPC�ҵ�Y����
 	
  setHomeY()
  ����NPC�ҵ�Y����
  
  getHomeZ()
  ��ȡNPC�ҵ�Z����
  
  setHomeZ()
  ����NPC�ҵ�Z����
  
  getHome()
  ��ȡNPC�ҵ�λ��
  
  setHome(x,y,z)
  ����NPC�ҵ�λ�á���X,Y,Zλ�á�
  
  getReturnToHome()
  ��ȡNPC�Ƿ���Է��س�����
  
  setReturnToHome(��/��)
  ����NPC�Ƿ���Է��س����أ���Ϊtrue����Ϊfalse 
  
  getAge()
  ��ȡNPC�����˶��
  
  kill()
  ��NPC������npc.kill()��
  
  reset()
  ����NPC��npc.reset(),��npc�������ݱ�Ϊ����npcħ���ٻ�����������
  
  giveItem(���,��Ʒ)
  ��ĳ���ĳ��Ʒ��ע����Ҫ������Ʒ���·���<��Ʒ>ϵ���н�������npc.giveItem(player,player.getHeldItem());������������еĶ��������<���в�Ϊ�յ������>
 } 
	
	
 {��������
  getName()
  ��ȡNPC���֡�npc.getName()��
  
  setName("����")
  ����NPC����
  
  getShowName()
  ��ȡNPC��ʲô�������ʾ���֣�0Ϊ��ʾ��1Ϊ���أ�2Ϊ����ʱ�ɼ�
  
  setShowName(����)
  ����NPC��ʲô�������ʾ���֡������Ϸ����о١�
  
  getTitle()
  ��ȡNPC����
  
  setTitle("")
  ����NPC���⡾npc.setTitle("sss")�� 
  
  {ģ��
   {��֫������scale��
   setHeadScale(x,y,z)
   ����NPC��ͷ�����0-2��С��λ����λС����   
 		
 		setBodyScale(x,y,z)
 		����NPC�����塾���0-2��С��λ����λС����
 		
 		setArmsScale(x,y,z)
 		����NPC���֡����0-2��С��λ����λС����
 		
 		setLegsScale(x,y,z)
 		����NPC���ȡ����0-2��С��λ����λС����
 		}
 	}
 	
 	npc.getMCEntity().display.skinType=����
  ����npc��Ƥ������,0Ϊ<Ĭ��>���͡���ѡ��·����,1Ϊ<���>���͡�������������֡�,2Ϊ<url>���͡���������վ���ӡ�,��ȥ�� "=Ƥ��·�� or ������� or ��վ"��Ϊ��ȡ,�磺npc.getMCEntity().display.skinType��
 	
 	getTexture()
 	��ȡNPC��<Ĭ��>����Ƥ����print(npc.getTexture())��
 	
 	setTexture(·��)
 	����NPCƤ��,���鿿getTexture()��ȡ·��ʾ��,��Ϊ����npc�е�<Ĭ��>����Ƥ��,����Ҫ����<���>����Ƥ����Ҫʹ�����淽����npc.setTexture("customnpcs:textures/entity/humanmale/ArcticSteve.png")��
 	
 	function setNpcTexture(name){
 		var MinecraftServer=Java.type("net.minecraft.server.MinecraftServer");
 		MinecraftServer=MinecraftServer.func_71276_C();
 		var GameProfile=MinecraftServer.func_152358_ax().func_152655_a("xiao_2419");
 		if(GameProfile!=null){
 			npc.getMCEntity().display.playerProfile=GameProfile;
 		}
 		npc.getMCEntity().display.playerProfile=null;
 	}
 	����npc��<���>����Ƥ��,�������Ϊ�����ڵ����������Ϊnull��ʹ����:setNpcTexture("�������")��
 	
 	npc.getMCEntity().display.playerProfile
 	��ȡ<���>����Ƥ��,�����ȡ��������Ϊnpc.getMCEntity().display.playerProfile.getName()
 	
 	npc.getMCEntity().display.url="��������"
 	����npc��<url>����Ƥ��,'��������'����ͨ����Ƥ��ͼƬ�ϴ���<΢��,�ٶ���>��"����"����ͼƬ��������'��������'(�ٶ��н̳�)
 	
 	npc.getMCEntity().display.cloakTexture="·��"
 	����npc���硾��ȡnpc����:npc.getMCEntity().display.cloakTexture��
 
 	npc.getMCEntity().display.glowTexture=·��
 	����npc���Ӳ���
 	
 	getSize()
 	��ȡNPC�ߴ�
 	
 	setSize(��ֵ)
 	����NPC�ߴ硾���30���������Ϊ30��
 
  getVisibleType()
  ��ȡNPC�Ƿ�ɼ���0Ϊ�ɼ���1Ϊ���ɼ���2Ϊ���ֿɼ�
 
 	setVisibleType(����)
  ����NPC�Ƿ�ɼ�
  
  getShowBossBar()
  ��ȡNPC��BOSS��Ѫ����ʲô�������ʾ��0Ϊ���أ�1Ϊ��ʾ��2Ϊ����ʱ�ɼ�
  
  setShowBossBar(����)
  ����NPC��BOSS��Ѫ����ʲô�������ʾ
 }	
	
	
 {��������
		getMaxHealth()
		��ȡNPC�������ֵ��������player,entity����npc.getMaxHealth()��player.getMaxHealth()��...��
		
		setMaxHealth(����)
		����NPC�������ֵ��npc.setMaxHealth(100)��
		
		getHealth()
		��ȡNPC����ֵ��������player,entity����npc.getHealth()��player.getHealth()��...��
		
		setHealth(����)
		����NPC����ֵ��������player,entity����npc.setHealth(0)��player.setHealth(0)��...��
	
		npc.getMCEntity().stats.aggroRange=����
		����npc������������Χ
	
		npc.getMCEntity().stats.immuneToFire=��/��
		npc�Ƿ���⵽�����˺�,��Ϊtrue,��Ϊfalse
		
		npc.getMCEntity().stats.potionImmune=��/��
		npc�Ƿ���⵽ҩˮЧ��,��Ϊtrue,��Ϊfalse
		
		npc.getMCEntity().stats.canDrown=��/��
		npc�Ƿ����ˮ,��Ϊtrue,��Ϊfalse
		
		npc.getMCEntity().stats.burnInSun=��/��
		npc�Ƿ����̫���±�ȼ��,��Ϊtrue,��Ϊfalse
		
		npc.getMCEntity().stats.noFallDamage=��/��
		npc�Ƿ����ߵ����˺�,��Ϊtrue,��Ϊfalse
		
		{����
			npc.getMCEntity().stats.spawnCycle=����
			����npc����������<0Ϊ��,1Ϊ����,2Ϊҹ��,3Ϊ��>
			
			npc.getMCEntity().stats.respawnTime=��ֵ
			����npc�ĸ���ʱ�䡾�磺npc.getMCEntity().stats.respawnTime=35,���ȡ��ֱֵ��npc.getMCEntity().stats.respawnTime���ɡ�
			
			npc.getMCEntity().stats.hideKilledBody=��/��
			�Ƿ�����npc��ʬ��,��Ϊtrue,��Ϊfalse
			
			npc.getMCEntity().stats.respawnTime=��/��
			npc�Ƿ����Ȼ����,��Ϊtrue,��Ϊfalse,������npc�����Naturally Despawn
		}	

		{��սѡ��
			getMeleeStrength()
			��ȡNPC��ս�˺�
			
			setMeleeStrength()
			����NPC��ս�˺�
			
			npc.getMCEntity().stats.attackRange=����
			����npc�Ĺ������롾�磺npc.getMCEntity().stats.attackRange=55,���ȡ��ֱֵ��npc.getMCEntity().stats.attackRange���ɡ�
			
			getMeleeSpeed()
			��ȡNPC��ս�����ٶ�
			
			setMeleeSpeed(����)
			����NPC��ս�����ٶ�
			
			npc.getMCEntity().stats.knockback=��ֵ
			����npc�Ļ��˾���
			
			npc.getMCEntity().stats.potionType=Ч��
			����npc����������������ҩˮЧ��,����Ч����,��:
			var EnumPotionType=Java.type("noppes.npcs.constants.EnumPotionType");
			npc.getMCEntity().stats.potionType=EnumPotionType.Fire;
			<None  Fire Poison Hunger Weakness Slowness Nausea Blindness Wither>
			<��Ч�� ��  �ж�    ����    ����     ����    ��θ    ʧ��      ���� >
			��ȡ��Ϊnpc.getMCEntity().stats.potionType
			
			npc.getMCEntity().stats.potionDuration=����
			ҩˮЧ��������ʱ��
			
			npc.getMCEntity().stats.potionAmp=����
			ҩˮЧ����ǿ��
		}

		{Զ��ѡ��
			shootItem(����,��Ʒ,��׼��)
			�����﷢��һ��Ͷ����,�������Ϊplayer,npc������,��Ʒ��ΪScriptItemStackʵ��,��׼�Ȼ�ʹͶ�������������һ��ֵ,����:
			var item=world.createItem("minecraft:stone",0,1);//����һ����Ʒ
			npc.shootItem(player,item,100);//��player����Ͷ����
	
			npc.getMCEntity().stats.accuracy=��ֵ
			����npcԶ�̹����ľ�׼�ȡ��磺npc.getMCEntity().stats.accuracy=100,���ȡ��ֱֵ��npc.getMCEntity().stats.accuracy���ɡ�
  
			npc.getMCEntity().stats.rangedRange=��ֵ
			����npcԶ�̹����ľ���
			
			npc.getMCEntity().stats.minDelay=��ֵ
			����npcԶ�̹���������ٶ�
			
			npc.getMCEntity().stats.maxDelay=��ֵ
			����npcԶ�̹����������ٶ�
			
			npc.getMCEntity().stats.fireRate=��ֵ
			����npcԶ�̹������������
			
			npc.getMCEntity().stats.burstCount=��ֵ
			����npcԶ�̹������������
			
			npc.getMCEntity().stats.fireSound=����
			����npcԶ�̹���ʱ����������
			
			npc.getMCEntity().stats.shotCount=��ֵ
			����npcԶ�̹����ĵ������
			
			getRangedBurst()
			��ȡNPCԶ����������
			
			setRangedBurst(��ֵ)
			����NPCԶ����������
  
			{��ҩ����
				getRangedStrength()
				��ȡNPCԶ�̹����˺�
				
				setRangedStrength(��ֵ)
				����NPCԶ�̹����˺�
				
				npc.getMCEntity().stats.pImpact=��ֵ
				����npc��ҩ�������
				
				npc.getMCEntity().stats.pSize=��ֵ
				����npc��ҩ�ĳߴ�
				
				npc.getMCEntity().stats.pPhysics=��/��
				����npc��ҩ�Ƿ�������Ӱ��,��Ϊtrue,��Ϊfalse
				
				npc.getMCEntity().stats.pExplode=��/��
				����npc��ҩ�Ƿ�ᱬը,��Ϊtrue,��Ϊfalse
				
				npc.getMCEntity().stats.pEffect=��ֵ
				����npc��ҩ�ĸ���ҩˮЧ��,�ͽ�ս������һ��,���ٸ�д
				
				npc.getMCEntity().stats.pDur=��ֵ
				����npc��ҩ�ĸ���ҩˮЧ������ʱ��
				
				npc.getMCEntity().stats.pArea=��ֵ
				����npc��ҩ�ĸ���ҩˮЧ����ǿ��
				
				npc.getMCEntity().stats.pTrail=����
				����npc��ҩ�ĸ�������,������:
				var EnumParticleType=Java.type("noppes.npcs.constants.EnumParticleType");
				npc.getMCEntity().stats.pTrail=EnumParticleType.Smoke
				<None,Smoke,Portal,Redstone,Lightning,LargeSmoke,Magic,Enchant,Crit>
				
				npc.getMCEntity().stats.pGlows=��/��
				����npc��ҩ�Ƿ�ᷢ��,��Ϊtrue,��Ϊfalse
   
				npc.getMCEntity().stats.pRender3D=��/��
				����npc��ҩ�Ƿ�Ϊ3D,��Ϊtrue,��Ϊfalse,�����Ϊ2D
				
				getRangedSpeed()
				��ȡNPCԶ�̹����ӵ��ٶ�
				
				setRangedSpeed(��ֵ)
				����NPCԶ�̹����ӵ��ٶ�
			}	
		}

		{��������
			seExplosionResistance(��ֵ)
			����NPC�Ƿ������0Ϊ-100����1Ϊ0��2Ϊ100�����ɼ�С���㡿��npc.seExplosionResistance(2)��
			
			getExplosionResistance()
			��ȡNPC����ֵ��npc.getExplosionResistance()��
			
			setMeleeResistance(��ֵ)
			����NPC��ս���ԣ�0Ϊ-100����1Ϊ0��2Ϊ100�����ɼ�С���㡿
			
			getMeleeResistance()
			��ȡNPC��ս���ԡ�npc.getMeleeResistance()��
			
			setArrowResistance(��ֵ)
			����NPC�������ԣ�0Ϊ-100����1Ϊ0��2Ϊ100�����ɼ�С���㡿��npc.setArrowResistance(2)��
			
			getArrowResistance()
			��ȡNPC��������
			
			setKnockbackResistance(��ֵ)
			����NPC���˿��ԣ�0Ϊ-100����1Ϊ0��2Ϊ100�����ɼ�С���㡿
			
			getKnockbackResistance()
			��ȡNPC���˿���
		}
		
		getHealthRegen()
		��ȡNPC���������ָ�
		
		setHealthRegen(��ֵ)
		����NPC���������ָ�
		
		getCombatRegen()
		��ȡNPC������ʱ�����ָ�
		
		setCombatRegen(��ֵ)
		����NPC������ʱ�����ָ�
			
		npc.getMCEntity().stats.creatureType=����
		����npc����������,����Ӣ����,��:
		var EnumCreatureAttribute=Java.type("net.minecraft.entity.EnumCreatureAttribute");
		npc.getMCEntity().stats.creatureType=EnumCreatureAttribute.ARTHROPOD;
		<UNDEFINED,UNDEAD,ARTHROPOD>
		<  ��ͨ     ����  ��֫����>
	}
	
	
 {AI
  setRetaliateType(��ֵ)
  ����NPC���ֵ���ʱ��״̬,0Ϊ����,1Ϊ�ֻ�,2Ϊ����,3Ϊ�޷�Ӧ��npc.setRetaliateType(2)��
  
  getRetaliateType()
  ��ȡNPC���ֵ���ʱ��״̬��npc.getRetaliateType()��
 }
	
	
	{��Ʒ��
  ������һ����Ʒ:
  world.createItem("��Ʒ",�;�,����);
  �磺world.createItem("minecraft:stone",0,1);
  ���Ǵ���һ��ʯͷ��Ʒ,��ʱΪScriptItemStackʵ��
  {�������в�������Ʒ:
   var SItem=world.createItem("minecraft:stone",0,1);
   SItem.setCustomName("test");
   SItem.setStackSize(64);
   player.setHeldItem(SItem);
   
   {��չ:�Զ���nbt
 	  
   }
  }
  
  getArmor()
  ��ȡװ������NPC��,0Ϊͷ��,1Ϊ�ؼ�,2Ϊ����,3Ϊѥ�ӡ�,���������,0Ϊѥ��,1Ϊ����,2Ϊ�ؼ�,3Ϊͷ����
 
  setArmor(λ��,��Ʒ)
  ����װ��,��Ʒ��ҪΪScriptItemʵ��,����:
 	player.setArmor(0,player.getHeldItem());
	 ��������е���Ʒ����Ϊ��ҵ�ѥ��
  
  getRightItem()
  ��ȡNPC������Ʒ��������λ�á���npc.getRightItem()��
  
  setRightItem(��Ʒ)
  ����NPC������Ʒ,��Ʒ��ҪΪScriptItemʵ��,����:
	 player.setRightItem(player.getHeldItem());
	 ��������е���Ʒ����Ϊnpc���ֵ���Ʒ
  
  getProjectileItem()
  ��ȡNPC�����Ʒ������λ�á�
  
  setProjectileItem(��Ʒ)
  ����NPC�����Ʒ
  
  getLefttItem()
  ��ȡNPC������Ʒ��������λ�á�
  
  setLeftItem(��Ʒ)
  ����NPC������Ʒ
  
  npc.getMCEntity().inventory.minExp=��ֵ
  ����npc���侭�����С��ֵ��ȥ��"=��ֵ"����ȡ,�磺npc.getMCEntity().inventory.minExp��
  
  npc.getMCEntity().inventory.maxExp=��ֵ
  ����npc���侭��������ֵ����ȡͬ�ϡ� 
  
  npc.getMCEntity().inventory.lootMode=����
  ����npc��Ʒ�������ʽ
	 0Ϊ��ͨ����������ʽ��
	 1Ϊ�Զ�ʰȡ����auto pickup,��Ʒ���Զ�������ұ���,����������
  
  npc.getMCEntity().inventory.items
  ��ȡnpc�ĵ������б�
	 ����ʹ��npc.getMCEntity().inventory.items[λ��]������ȡ.��0��ʼ����,���8,��:
	 npc.getMCEntity().inventory.items[0];
	 �������е���Ʒ:
	 var stone=world.createItem("minecraft:stone",0,1);
	 npc.getMCEntity().inventory.items[λ��]=stone.getMCItemStack();
	 ����ʱ��ҪΪItemStackʵ��,ScriptItemStackʵ�� ����getMCItemStack()��ȡ���� ItemStackʵ��
  
  npc.getMCEntity().inventory.dropchance
  ��ȡnpc�ĵ����Ｘ���б�,�޸ĺ͵�����ȡͬ��,npc.getMCEntity().inventory.dropchance[λ��]=��ֵ,���100,��С0
	}
	
	
	{�߼�����
  {����ݡ�
   getRole()
   ��ȡ��ְҵ����Ҫʹ����ְҵ���ñ�������,��:npc.getRole().hasOwner()��
   {��Ӷ���
    setOwner("���")
    ����ĳNPC������ҡ�npc.getRole().setOwner("���")��
    
				getOwner()
				��ȡĳNPC�������ҡ�npc.getRole().getOwner()��
				
				hasOwner()
				ȷ��ĳNPC�Ƿ��и�������
				
				getDaysLeft()
				��ȡNPC�����Ӷ���޻��м���
				
				addDaysLeft(����)
				���NPC��Ӷ��������
				
				getInfiniteDays()
				��ȡĳNPC�������������Ƿ�Ϊ���á�npc.getRole().getInfiniteDays()��
				
				setInfiniteDays()
				����ĳNPC�������������Ƿ�Ϊ���ã���Ϊtrue����Ϊfalse
				
				getGuiDisabled()
				��ȡNPC�Ƿ����GUI
				
				setGuiDisabled(��/��)
				����NPC�Ƿ����GUI
			}
			{����
				getMarket()
				��ȡ�̵�����
				
				setSellOption(λ��,��Ʒ1,��Ʒ2,�һ���)
				����NPC�̵�һ�����Ʒ,λ�ô�0��17,��Ʒ����createItem����,�һ���Ҳһ��<������Ҫ��Ʒ2����һ�,�����>
				����:
				var item1=world.createItem("minecraft:grass",0,5);
				var item2=world.createItem("minecraft:iron",0,5);
				var out=world.createItem("minecraft:stone",0,64);
				npc.getRole().setSellOption(0,item1,item2,out);
					
				removeSellOption(λ��)
				ɾ��ĳ��λ�õĶһ�
				
				setMarket(�̵�����)
				�����̵����ơ���npc�������½��Ǹ�Linked Marketname��
			}
		}

		{��ְҵ��
			getJob()
			��ȡnpc��ְҵ����Ҫʹ��ְҵ���ñ�������,��:npc.getJob().getSong()��
			
			{��ʫ����
				getSong()
				��ȡ���������ĸ���
				
				setSong("·��")
				���������ĸ������磺npc.getJob().setSong("armourersworkshop:burn")��
			}
			{��Ӷ���
				getFollowingName()
				��ȡ��Ӷ�˵�����
				
				getFollowingNpc()
				��ȡ����Ӷ��NPC
				
				isFollowing()
				�Ƿ��ѱ���Ӷ
				
				setFollowingName("����")
				���ù�ӶNPC�˵�����
			}
			{������
				heal(ʵ��,Ѫ��)
				��ĳ��ʵ���������,����:npc.getJob().heal(player.getMCEntity(),100);
				ʵ����ҪΪEntityLivingBaseʵ��
			}
			{�ٻ�ʦ
				spawnEntity(���)
				���ٻ�ʦ�����ٻ�ĳ���ٻ��۵�NPC
				
				removeAllSpawned()
				ɾ�������ٻ���
			}
			{ģ��
				getRotationX(��λ)
				��ȡĳ��λ��Xֵ��0Ϊͷ��1λ���壬2λ���֣�3λ���֣�4Ϊ��ţ�5Ϊ�ҽš�
				
				getRotationY(��λ)
				��ȡĳ��λ��Yֵ��0Ϊͷ��1λ���壬2λ���֣�3λ���֣�4Ϊ��ţ�5Ϊ�ҽš�
					
				getRotationZ(��λ)
				��ȡĳ��λ��Zֵ��0Ϊͷ��1λ���壬2λ���֣�3λ���֣�4Ϊ��ţ�5Ϊ�ҽš�
					
				setRotationX(��λ,�Ƕ�)
				����ĳ��λ��Xֵ
				
				setRotationY(��λ,�Ƕ�)
				����ĳ��λ��Yֵ
				
				setRotationZ(��λ,�Ƕ�)
				����ĳ��λ��Zֵ
					
				isEnabled(��λ)
				�Ƿ�����ĳ��λ
				
				setEnabled(��λ,��/��)
				����ĳ��λ�Ƿ�������Ϊtrue,��Ϊfalse��
			}	
		}	
		
		say("")
		��NPC˵ʲô����Ҫ��NPC˵����ȡ����ֵ��ȥ��<"">����npc.say("������")��
		
		npc.getMCEntity().advanced.setRole(����)
		����npc����ݡ�ʾ����:npc.getMCEntity().advanced.setRole(1)������б�:{
			0     1      2         3      4          5       6
		None,Trader,Follower, Bank,Transporter,Postman,Companion
			��   ����  ��Ӷ��� ������   ����ʦ    ��ʹ     ͬ��  
		}
		
		<npc.getRole().getType()��ȡnpc��ǰ��ݴ��������,npc.getJob().getTpye()��ȡnpc��ǰְҵ���������>
		
		npc.getMCEntity().advanced.setJob(����)
		����npc��ְҵ��ʾ�������޹�����,����б�:{
			0       1        2        3         4          5          6           7             8           9   
			��   ����ʫ��  ������   ����    ��Ʒ������   ��Ӷ���  �ٻ�ʦ      Ⱥ��Ի�     ���������     ģ��
		None,  Bard,    Healer,  Guard,  ItemGiver,  Follower,  Spawner,  Conversation,  ChunkLoader,  Puppet
		}
		
		{̨��:
			npc.getMCEntity().advanced.interactLines.lines[0].text="�����ַ�,����ȫ�ո�"
			����npc�����Ի��е�һ��Ϊ "�����ַ�,����ȫ�ո�" ,��ȡ������� = ,�磺npc.getMCEntity().advanced.interactLines.lines[0].text,�����ĸ��¼�Ҳ�����:{
				npc.getMCEntity().advanced.worldLines.lines[0].text="�л�70����"       ��������ʱ,�е����ƽű��е�����
				npc.getMCEntity().advanced.attackLines.lines[0].text="�л�70����"      ��npc����ʱ
				npc.getMCEntity().advanced.killedLines.lines[0].text="�л�70����"      ��npc����ʱ
				npc.getMCEntity().advanced.killLines.lines[0].text="�л�70����"        ��npcɱ������ʱ
			}
			
			npc.getMCEntity().advanced.interactLines.lines[0].sound="·��"
			����npc�����Ի��е�һ�仰˵��ʱ�������Ч<PS:·�������������,����û����>
			
			npc.getMCEntity().advanced.interactLines.lines.size()
			��ȡ��ǰnpc�����Ի����м����˵�Ļ�,�����¼�̨�ʲ��ٷ�������,���Ϸ�ʾ�����޹�������<PS:Ψ����Ч�ĶԻ����ܱ�����,����������˿ո���������ַ���>
			
			npc.getMCEntity().advanced.interactLines.orderedLines=��/��
			�¼�̨���Ƿ����˵��,��Ϊtrue,��Ϊfalse,Ĭ��Ϊ��
		}
		
		{��Ӫ:
			npc.getMCEntity().advanced.attackOtherFactions=��/��
			����npc�Ƿ񹥻��ж���Ӫ,��Ϊtrue����Ϊfalse
			
			npc.getMCEntity().advanced.defendFaction=��/��
			����npc�Ƿ񱣻���Ӫ�е���,��Ϊtrue����Ϊfalse
		}
		
		{�Ի���:
			npc.getMCEntity().dialogs.get(����).dialogId=�Ի�id
			���öԻ�����ĳ���Ի��ĶԻ�id<��������[�߼����á��Ի���]�жԻ����е�˳���><�Ի�id��Ϊnpc�д����Ի�ʱ��д�����ĩβ��С����>,ȥ��"=�Ի�id"��Ϊ��ȡ,�磺npc.getMCEntity().dialogs.get(����).dialogId
			
			npc.getMCEntity().dialogs.get(����).title="����"
			���öԻ�����ĳ���Ի��ı���<�޸�[�߼����á��Ի���]�еı��ⲻ��Ӱ��[ȫ�����á��Ի���]�еı���!>,��ȡ��ʽ���������޲���
			
			npc.getMCEntity().dialogs.get(����).command="ָ��"
			���öԻ�����ĳ���Ի�ִ�е�ָ��<ָ��Ὣ�öԻ���[ȫ�����á��Ի���]�еĶԻ�һ���޸�>,��ȡ��ʽ���������޲���.ʾ��:npc.getMCEntity().dialogs.get(����).command="time set day"
		}
		
		{��Ч:
			npc.getMCEntity().advanced.idleSound="·��"
			����npc����Ч��������Ч<·�������������>
			
			npc.getMCEntity().advanced.angrySound="·��"
			����npc����Ч�з�ŭ��Ч
			
			npc.getMCEntity().advanced.hurtSound="·��"
			����npc����Ч�м�����Ч
			
			npc.getMCEntity().advanced.deathSound="·��"
			����npc����Ч��������Ч
			
			npc.getMCEntity().advanced.stepSound="·��"
			����npc����Ч��������Ч
			
			npc.getMCEntity().advanced.disablePitch=��/��
			�Ƿ�"��Ϸ����ʾ",δ֪Ч��<��Ϸ�� ��Ϊfalse,��Ϊtrue,��Ӱ���д.>
		}
		
		{ҹ������:
			//���ڴ��´θ���
		}
		
		{Linked:
			//���ڴ��´θ���
		}
	}
	
	
 {ȫ�����ã�
		{���浵��:
			//���ڴ��´θ���
		}
		
		{��Ӫ��
			getId()
			��ȡ��ӪID
			
			getFaction()
			��ȡNPC��Ӫ��npc.getFaction()��
			
			setFaction(id)
			����NPC��Ӫ��������ӪID��
			
			getColor()
			��ȡ��Ӫ��ɫ
			
			getDefaultPoints()
			��ȡNPC��Ӫ��Ĭ��ֵ�����ӣ�npc.faction.defaultPoints()��<����NPC��Ӫ��Ĭ�ϵ���Ӫ����>
			
			isFriendlyToPlayer(���)
			����Ӫ������Ƿ�Ϊ�Ѻá����ӣ�npc.faction.isFriendlyToPlayer(world.getPlayer("test"))��
			
			isNeutralToPlayer(���)
			����Ӫ������Ƿ�Ϊ���������پ����ӣ��������޹�������
			
			isAggressiveToPlayer(���)
			����Ӫ������Ƿ�Ϊ�ж�
			
			isAggressiveToNpc(npc)
			��δ�õ���ȷ����
		}
  
  {�Ի���:
   //�����Űٷְٵ����Ÿ�������,��������Ƭ����û�˻����������о�.����,�´ΰ�����,���浵��,���͵���,��ҵ���,npc�ϳɱ�,��Ȼ����(WIP)��2���ڱ��γ���--by ���ͽ����ͽ���
   ///�·���һ��Ϊ��Ҫ,���뵥��ʹ������ĳ��,�������·���һ��һ����
   var DialogController=Java.type("noppes.npcs.controllers.DialogController");
   DialogController.instance.categories                                        ��ȡ�Ի������
   DialogController.instance.categories.get(����)                              ��ȡĳ���Ի������
   DialogController.instance.categories.get(����).dialogs                      ��ȡĳ���Ի�������е����жԻ�
   DialogController.instance.dialogs                                           ��ȡ���жԻ�
   DialogController.instance.dialogs.get(id).category=���                     ĳ���Ի��ı����ڵĶԻ������,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).id=����                           ĳ���Ի�id,ȥ��=�Լ��󷽵��ַ���Ϊ��ȡ,��:DialogController.instance.dialogs.get(id).id
   DialogController.instance.dialogs.get(id).title="����"                      ĳ���Ի�����,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).text="�ı�"                       ĳ���Ի��ı�,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).availability                      ��ȡĳ���Ի��п��õ�ѡ��
   {//����DialogController.instance.dialogs.get(id).availability�ĸ������
    DialogController.instance.dialogs.get(id).availability.dialogAvailable=����      ����ĳ���Ի��п��õ�ѡ����ѡ��Ի���һ���Ŀ�������
    DialogController.instance.dialogs.get(id).availability.dialogId=id               ����ĳ���Ի��п��õ�ѡ����ѡ��Ի���һ���ĶԻ�id
    DialogController.instance.dialogs.get(id).availability.dialog2Available=����     ����ĳ���Ի��п��õ�ѡ����ѡ��Ի��ڶ����Ŀ�������
    DialogController.instance.dialogs.get(id).availability.dialog2Id=id              ����ĳ���Ի��п��õ�ѡ����ѡ��Ի��ڶ����ĶԻ�id
    DialogController.instance.dialogs.get(id).availability.dialog3Available=����     ����ĳ���Ի��п��õ�ѡ����ѡ��Ի��������Ŀ�������
    DialogController.instance.dialogs.get(id).availability.dialog3Id=id              ����ĳ���Ի��п��õ�ѡ����ѡ��Ի��������ĶԻ�id
    DialogController.instance.dialogs.get(id).availability.dialog4Available=����     ����ĳ���Ի��п��õ�ѡ����ѡ��Ի����ĸ��Ŀ�������
    DialogController.instance.dialogs.get(id).availability.dialog4Id=id              ����ĳ���Ի��п��õ�ѡ����ѡ��Ի����ĸ��ĶԻ�id
    DialogController.instance.dialogs.get(id).availability.questAvailable=����       ����ĳ���Ի��п��õ�ѡ����ѡ�������һ���Ŀ�������
    DialogController.instance.dialogs.get(id).availability.questId=id                ����ĳ���Ի��п��õ�ѡ����ѡ�������һ��������id
    DialogController.instance.dialogs.get(id).availability.quest2Available=����      ����ĳ���Ի��п��õ�ѡ����ѡ������ڶ����Ŀ�������
    DialogController.instance.dialogs.get(id).availability.quest2Id=id               ����ĳ���Ի��п��õ�ѡ����ѡ������ڶ���������id
    DialogController.instance.dialogs.get(id).availability.quest3Available=����      ����ĳ���Ի��п��õ�ѡ����ѡ������������Ŀ�������
    DialogController.instance.dialogs.get(id).availability.quest3Id=id               ����ĳ���Ի��п��õ�ѡ����ѡ�����������������id
    DialogController.instance.dialogs.get(id).availability.quest4Available=����      ����ĳ���Ի��п��õ�ѡ����ѡ��������ĸ��Ŀ�������
    DialogController.instance.dialogs.get(id).availability.quest4Id=id               ����ĳ���Ի��п��õ�ѡ����ѡ��������ĸ�������id
    {//����DialogController.instance.dialogs.get(id).availability��ʾ��
     �Ի�����������:<Always>      <After>       <Before>            �������������:<Always>      <After>       <Before>     <Active>       <NotActive>
                    ���ǿ���      ...֮��       ...֮ǰ                            ���ǿ���      ...֮��       ...֮ǰ      ������ʱ        ��δ����ʱ
     ʹ�öԻ���������ʾ����:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityDialog=Java.type("noppes.npcs.constants.EnumAvailabilityDialog");
     DialogController.instance.dialogs.get(0).availability.dialogAvailable=EnumAvailabilityDialog.Always
     �������ɽ��Ի�idΪ 0 �ĶԻ��п���ѡ���� ѡ��Ի� ��һ����Ϊ<���ǿ���>,�޸�ĩβ��<Always>����.PS:�е���,ʲô��ʲô��ʲô��...
     
     ʹ�������������ʾ����:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityQuest=Java.type("noppes.npcs.constants.EnumAvailabilityQuest");
     DialogController.instance.dialogs.get(1).availability.questAvailable=EnumAvailabilityQuest.Always
     �������ɽ��Ի�idΪ 1 �ĶԻ��п���ѡ���� ѡ������ ��һ����Ϊ<���ǿ���>
    }
    DialogController.instance.dialogs.get(id).availability.factionAvailable=����     ����ĳ���Ի��п��õ�ѡ���е�һ����Ӫ����������
    DialogController.instance.dialogs.get(id).availability.faction2Available=����    ����ĳ���Ի��п��õ�ѡ���еڶ�����Ӫ����������
    DialogController.instance.dialogs.get(id).availability.factionStance=��/��/��    ����ĳ���Ի��п��õ�ѡ���е�һ����Ӫ����Ϊ��/��/��
    DialogController.instance.dialogs.get(id).availability.faction2Stance=��/��/��   ����ĳ���Ի��п��õ�ѡ���еڶ�����Ӫ����Ϊ��/��/��
    DialogController.instance.dialogs.get(id).availability.factionId=��Ӫid          ����ĳ���Ի��п��õ�ѡ���е�һ����Ӫ,ɾ����null����
    DialogController.instance.dialogs.get(id).availability.faction2Id=��Ӫid         ����ĳ���Ի��п��õ�ѡ���еڶ�����Ӫ,ɾ����null����
    {//����DialogController.instance.dialogs.get(id).availability.factionAvailable��factionStance��ʾ���Լ����ͱ�ʾ
     ��Ӫ��������������:<Always>    <Is>    <IsNot>            ��Ӫ ��/��/�� ��ʾ��:<Friendly>    <Neutral>    <Hostile>
                        ���ǿ���     ��       ����                                     �Ѻ�         ����         �ж�
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityFactionType=Java.type("noppes.npcs.constants.EnumAvailabilityFactionType");
     DialogController.instance.dialogs.get(0).availability.factionAvailable=EnumAvailabilityFactionType.Always
     �������ɽ��Ի�idΪ 0 �ĶԻ��п���ѡ���� ��Ӫ�������� ��Ϊ<���ǿ���>
     
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumAvailabilityFaction=Java.type("noppes.npcs.constants.EnumAvailabilityFaction");
     DialogController.instance.dialogs.get(0).availability.factionAvailable=EnumAvailabilityFaction.Friendly
     �������ɽ��Ի�idΪ 0 �ĶԻ��п���ѡ���� ��Ӫ��/��/�� ��Ϊ �Ѻ�
    }
    DialogController.instance.dialogs.get(id).availability.daytime=����              ����ĳ���Ի��п��õ�ѡ����ʱ�̵�����<��Ϊ��ĳ��ʱ��βſ�ʹ�øöԻ�>
    {//����DialogController.instance.dialogs.get(id).availability.daytime��ʾ���Լ����ͱ�ʾ
     ʱ�̿���������:<Always>      <Night>      <Day>
                    ���ǿ���       ҹ��         ����
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumDayTime=Java.type("noppes.npcs.constants.EnumDayTime");
     DialogController.instance.dialogs.get(0).availability.daytime=EnumDayTime.Night
     �������ɽ��Ի�idΪ 0 �ĶԻ��п���ѡ���� ʱ�� ��Ϊ<���ǿ���>
    }
    DialogController.instance.dialogs.get(id).availability.minPlayerLevel=����       ����ĳ���Ի��п��õ�ѡ���еȼ�<��Ϊĳ����ڸõȼ�֮�ϲſ�ʹ�øöԻ�>
   }
   DialogController.instance.dialogs.get(id).factionOptions                    ��ȡĳ���Ի�����Ӫѡ��
   {//����DialogController.instance.dialogs.get(id).factionOptions�ĸ������
    DialogController.instance.dialogs.get(id).factionOptions.decreaseFactionPoints=��/��        ������Ӫѡ���е�һ�������򽵵͵���,falseΪ����,trueΪ����
    DialogController.instance.dialogs.get(id).factionOptions.decrease2FactionPoints=��/��       ������Ӫѡ���еڶ��������򽵵͵���
    DialogController.instance.dialogs.get(id).factionOptions.factionId=��Ӫid                   ������Ӫѡ���е�һ����ѡ��Ӫ
    DialogController.instance.dialogs.get(id).factionOptions.faction2Id=��Ӫid                  ������Ӫѡ���еڶ�����ѡ��Ӫ
    DialogController.instance.dialogs.get(id).factionOptions.factionPoints=����                 ������Ӫѡ���е�һ����ѡ��Ӫ��������/��������
    DialogController.instance.dialogs.get(id).factionOptions.faction2Points=����                ������Ӫѡ���еڶ�����ѡ��Ӫ��������/��������
			}
   DialogController.instance.dialogs.get(id).options                           ��ȡĳ���Ի��жԻ���ѡ��
   {//����DialogController.instance.dialogs.get(id).options�ĸ������
    DialogController.instance.dialogs.get(id).options.get(id).optionType=����   ĳ���Ի���ѡ����ѡ������,�ڶ���get(id)Ϊ��ȡ�ڼ����Ի���ѡ��,����6��
    {//����DialogController.instance.dialogs.get(id).options.get(id).optionType�������Լ��ò����÷�
     ѡ�����Ϳ���������:<DialogOption>     <Disabled>     <RoleOption>     <CommandBlock>
                             �Ի�              �ر�         ְҵ����           �����
     ʹ�öԻ���������ʾ����:
     var DialogController=Java.type("noppes.npcs.controllers.DialogController");
     var EnumOptionType=Java.type("noppes.npcs.constants.EnumOptionType");
     DialogController.instance.dialogs.get(1).options.get(1).optionType=EnumOptionType.DialogOption
     �������ɽ��Ի�idΪ 1 �ĶԻ���ѡ���е�һ��ѡ�� ��Ϊ<�Ի�>
    }
    DialogController.instance.dialogs.get(id).options.get(id).dialogId=�Ի�id   ĳ���Ի���ѡ����ѡ��Ի�
    DialogController.instance.dialogs.get(id).options.get(id).title="����"      ĳ���Ի���ѡ���б���
    DialogController.instance.dialogs.get(id).options.get(id).optionColor=��ɫ  ĳ���Ի���ѡ������ɫ,��ɫΪʮ��������
    {//������ɫʮ������
     �����·���ַѡ����ɫ
     https://www.sioe.cn/yingyong/yanse-rgb-16/
    }
    DialogController.instance.dialogs.get(id).options.get(id).command="/ָ��"   ĳ���Ի���ѡ����ָ��,���öԻ���ѡ�����Ͳ�ΪCommandBlock,���д��,�޷�ִ��
   }
   DialogController.instance.dialogs.get(id).quest=����id                        ĳ���Ի��ı�ѡ�������,��ȡ��<�Ի���>���Ϸ�ʾ����ͬ
   DialogController.instance.dialogs.get(id).sound=����·��                    ĳ���Ի��ı�ѡ�����Ч,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).mail=�ż�                         ĳ���Ի��ı����ż�,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).command=ָ��                      ĳ���Ի��ı���ָ��,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).hideNPC=��/��                     ĳ���Ի��ı���ʱ�����½ǵ�����npc,��Ϊtrue,��Ϊfalse,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).showWheel=��/��                   ĳ���Ի��ı���ʱ�Ƿ��Ϊ��ʾ�Ի��������,��Ϊtrue,��Ϊfalse,��ȡ��������ͬ
   DialogController.instance.dialogs.get(id).disableEsc=��/��                  ĳ���Ի��ı���ʱ�Ƿ�����ESC�˳��Ի�,��Ϊtrue,��Ϊfalse,��ȡ��������ͬ
   
   function getCategoriestitle(){
   	var DialogController=Java.type("noppes.npcs.controllers.DialogController");
   	var Categories=DialogController.instance.categories;
   	var array=[];
   	for(var a in Categories){
   		 array[a-1]=(a)+"="+Categories.get(a).title
   	}
   	return array;
   }
   ��ȡ���жԻ�����𼰶�Ӧ����
  }		
		
		{����:
			//���ڴ��´θ���
		}

		{���͵���:
			//���ڴ��´θ���
		}

		{��ҵ���:
			//���ڴ��´θ���
		}

  {NPC�ϳɱ�:
   ///�·���һ��Ϊ��Ҫ,���뵥��ʹ������ĳ��,�������·���һ��һ����
   var RecipeController=Java.type("noppes.npcs.controllers.RecipeController");
   RecipeController.instance.globalRecipes         ��ȡnpc�ϳɱ���ȫ���������кϳ�,������ȡһ����:RecipeController.instance.globalRecipes.get(�ϳ�id),��ȡ���кϳ�ʱ����ʾid,��:132=noppes.npcs.controllers.RecipeController@4756c318����ǰ���� 132 ��Ϊ�úϳ�id
   RecipeController.instance.anvilRecipes          ��ȡnpc�ϳɱ���ľ��̨���кϳ�,������ȡһ�����Ϸ���ʾ
   {//��ȡ�ϳɺ�ɽ��еĸ������:
    RecipeController.instance.globalRecipes.get(�ϳ�id).id                         ��ȡĳ���ϳ�id�ĺϳ�id
    RecipeController.instance.globalRecipes.get(�ϳ�id).name                       ��ȡĳ���ϳ�id������
    RecipeController.instance.globalRecipes.get(�ϳ�id).ignoreDamage=��/��         ����ĳ���ϳ�id�Ƿ������𻵺ϳ�,��Ϊtrue,��Ϊfalse,����:RecipeController.instance.globalRecipes.get(135).ignoreDamage=true,��ȡʾ����:RecipeController.instance.globalRecipes.get(135).ignoreDamage
    RecipeController.instance.globalRecipes.get(�ϳ�id).ignoreNBT=��/��            ����ĳ���ϳ�id�Ƿ�ƥ��nbt�ϳ�,��ȡ���Ϸ�����
    RecipeController.instance.globalRecipes.get(�ϳ�id).isGlobal=��/��             ����ĳ���ϳ�id���ڵ�λ��,trueΪȫ������,falseΪľ��̨,��ȡʾ�����Ϸ�����
    RecipeController.instance.globalRecipes.get(�ϳ�id).field_77574_d              ��ȡĳ���ϳ�id�ĺϳɲ���,���ò��ϼ�:RecipeController.instance.globalRecipes.get(�ϳ�id).field_77574_d[����]=ItemStack ��Ʒ,������һ��С����,��ֻռ�����кϳ�,��ô�ϳɸ��������Ϊ6,��Ϊ������Ϊ5.��:<"XXY","XXY","XXY",X��ǰΪ���ø���,Y����.���޷��ı� Y ��������Ʒ!>
    RecipeController.instance.globalRecipes.get(�ϳ�id).func_77571_b()          ��ȡĳ���ϳ�id�ĺϳ���Ʒ
   }
   RecipeController.instance.nextId                ��ȡnpc�ϳɱ��д�����һ���ϳɵĺϳ�id
   RecipeController.instance.removeRecipe(�ϳ�id)  ɾ��npc�ϳɱ���ĳ���ϳ�
   {//�����npc�ϳɱ�:
    function addRecipe(name,item,isGlobal,recipe){
    	var RecipesDefault=Java.type("noppes.npcs.controllers.RecipesDefault");
    	RecipesDefault.addRecipe("test2",Items.field_151025_P,true,["XXZ","YYZ",Character.valueOf('X'),Items.field_151025_P,Character.valueOf('Y'),Items.field_151055_y])
    }
    /*ע���:
    �ϳɵ���Ʒ����Ϊ<ItemStack ��Ʒ>,����Ҳ�����
    �䷽������:"QQQ","WWW","EEE".�ַ������������
    ȡ��������ͬ�ַ�,ȡ����ͬ�ַ�������ž�ֻ���Ǻϳɲ���,ȡ��������ͬ�ַ����ٸ�����ν,�����䷽�����޷������䷽��С.���ڹ���̨:"XXX","YYY","ZZZ",���չ���̨��������.����ľ��̨"XXXX","YYYY","ZZZZ","HHHH"
    �ϳɲ���,�ϳɲ��ϱ��������ȡ��������ͬ�ַ������һ������
    */
    ʾ����:
    var Item=Java.type("net.minecraft.item.Item");
    var Items=Java.type("net.minecraft.init.Items");
    var Character=Java.type("java.lang.Character");
    addRecipe("test2",Items.field_151025_P,true,["XXZ","YYZ",Character.valueOf('X'),Items.field_151025_P,Character.valueOf('Y'),Items.field_151055_y])
                 ��           ��                ��     ��     ��            ��                      ��                     ��                      ��
            �ϳɱ�����   �ϳɵ���Ʒ  �ϳɱ�����λ�� �䷽����    ȡ��������ͬ�ַ�1         �ϳɲ���1        ȡ��������ͬ�ַ�2          �ϳɲ���2
    
    /**  ���ӳ���,���˶�λ��ǲ�������������:2782876939 **/
   }
   
   { 8����չ��8:
    �����Զ���ϳ�:
    
    ��ȡ���кϳ��䷽����:
    function AllRecipeAmount(){
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	return CraftingManager.func_77594_a().func_77592_b().length
    }
    
    ����̨����ϳ�:
    function addShapelessRecipe(ItemStack,recipe){
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	CraftingManager=CraftingManager.func_77594_a()
    	CraftingManager.func_77596_b(ItemStack,recipe);
    }
    ��npc�ϳɱ�Ļ���������,����Ҫ�ϳ���Ʒ��ϳɲ���,�ϳɲ��Ͽ���ӾŸ�,������ϳɽ����ڹ���̨.ʾ����:
    var Items=Java.type("net.minecraft.init.Items");
    var ItemStack=Java.type("net.minecraft.item.ItemStack");
    addShapelessRecipe(new ItemStack(Items.field_151025_P),[Items.field_151025_P,Items.field_151025_P]);
                                     ��                                          ��
    							  �ϳ���Ʒ                                  �ϳɲ���
    
    ɾ���ϳ�:
    function removeRecipe(id){
    	Array.prototype.remove = function(val) { 
    		var index = this.indexOf(val); 
    		if (index > -1) { 
    			this.splice(index, 1);
    		}
    	};
    	var CraftingManager=Java.type("net.minecraft.item.crafting.CraftingManager");
    	var field=CraftingManager.class.getDeclaredField("field_77597_b");
    	field.setAccessible(true);
    	var a=field.get(CraftingManager.func_77594_a());
    	try{
    		field.set(CraftingManager.func_77594_a(),a.remove(id));
    	}catch(e){
    		print("�����ڸ�id!")
    	}
    }
    ɾ��ĳ���ϳ�,������id����,�޷�ʹ�ø÷���ɾ��npc�ϳɱ�!�����ĺϳ�һ������ĩβ,��:ԭ���кϳ�����Ϊ1554,����һ��npc�ϳ�,��ǰ���кϳ�����Ϊ1555,��ô1555-1=�����ĺϳɵ�id,����idΪ1554<��Ҫ -1 ����Ϊ����úϳɵ�����������ArrayList,ArrayList��0��ʼ����>
    
 			
    ��¯:
    function AllFurnaceAmount(){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	return FurnaceRecipes.func_77602_a().func_77599_b().size();
    }
    ��ȡ������¯�䷽����
    
    function Furnaceinfo(type){
    	var findfield=type==true?"field_77605_c":"field_77604_b";
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var field=FurnaceRecipes.class.getDeclaredField(findfield);
    	field.setAccessible(true);
    	return field.get(FurnaceRecipes.func_77602_a())
    }
    trueΪ��ȡ����ֵ,falseΪ��ȡ��¯���/������Ʒ.������ȡ��¯�ϳ������ƷFurnaceinfo(false).values().toArray()[1],������Ϊ:Furnaceinfo(false).keySet().toArray()[1]
    
    function addFurnaceRecipes(item,item1,experience){
    	var Item=Java.type("net.minecraft.item.Item");
    	var Block=Java.type("net.minecraft.block.Block");
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var ItemStack=Java.type("net.minecraft.item.ItemStack");
    	FurnaceRecipes=FurnaceRecipes.func_77602_a();
    	var1=item instanceof Block?new ItemStack(Item.func_150898_a(item),1,32767):item;
    	FurnaceRecipes.func_151394_a(var1,item1,experience);
    }
    ���һ����¯�䷽,itemΪ�����Ʒ,item1Ϊ������Ʒ,experienceΪ��õľ���<�����в�δ���鵽��Ч��>,ʹ��ʾ����:
    var held=player.getHeldItem().getMCItemStack();
    addFurnaceRecipes(held.func_77973_b(),held,5)
    ճ������һ��<�Ի�>
    
    function removeFurnaceRecipes(id){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var field=FurnaceRecipes.class.getDeclaredField("field_77605_c");
    	var field1=FurnaceRecipes.class.getDeclaredField("field_77604_b");
    	field.setAccessible(true);
    	field1.setAccessible(true);
    	var experienceList=field.get(FurnaceRecipes.func_77602_a())
    	var smeltingList=field1.get(FurnaceRecipes.func_77602_a())
    	experienceList.remove(experienceList.keySet().toArray()[id])
    	smeltingList.remove(smeltingList.keySet().toArray()[id])
    	field.set(FurnaceRecipes.func_77602_a(),experienceList);
    	field1.set(FurnaceRecipes.func_77602_a(),smeltingList);
    }
    ɾ��һ����¯�䷽,ʹ������:removeFurnaceRecipes(5)
    
    function modifyFurnaceRecipes(types,id,info){
    	var FurnaceRecipes=Java.type("net.minecraft.item.crafting.FurnaceRecipes");
    	var ItemStack=Java.type("net.minecraft.item.ItemStack");
    	var HashMap=Java.type("java.util.HashMap");
    	var Float=Java.type("java.lang.Float");
    	var Double=Java.type("java.lang.Double");
    	var field=FurnaceRecipes.class.getDeclaredField("field_77605_c");
    	var field1=FurnaceRecipes.class.getDeclaredField("field_77604_b");
    	field.setAccessible(true);
    	field1.setAccessible(true);
    	var experienceList=field.get(FurnaceRecipes.func_77602_a());
    	var smeltingList=field1.get(FurnaceRecipes.func_77602_a());
    	var var0=new Array(smeltingList.size()),var1=new Array(smeltingList.size()),var2=new Array(smeltingList.size()),hashmap1=new HashMap(),hashmap2=new HashMap();
    	for(var a=0;a<smeltingList.size();a++){
    		var0[a]=experienceList.values().toArray()[a];
    		var1[a]=smeltingList.keySet().toArray()[a];
    		var2[a]=smeltingList.values().toArray()[a];
    	}
    	if(types==0){
    		info=!(isNaN(info))?info:0
    		var0[id]=new Double(info)
    	}else{
    		if(types==1){
    			if(!(info instanceof ItemStack)){
    				print("��Ʒ����ΪItemStack ��Ʒ");
    				return;
    			}
    			var1[id]=info
    		}else{
    			if(types==2){
    				if(!(info instanceof ItemStack)){
    					print("��Ʒ����ΪItemStack ��Ʒ");
    					return;
    				}
    				var2[id]=info
    			}else{
    				print("��������");
    				return;
    			}
    		}
    	}
    	for(var b=0;b<var1.length;b++){
    		hashmap1.put(var1[b],new Float(var0[b]));
    		hashmap2.put(var1[b],var2[b]);	
    	}
    	field.set(FurnaceRecipes.func_77602_a(),hashmap1);
    	field1.set(FurnaceRecipes.func_77602_a(),hashmap2);
    }
    �޸�ĳ����¯�䷽,ʾ����:modifyFurnaceRecipes(2,3,player.getHeldItem().getMCItemStack())
    *types  �޸ĵ�����,0Ϊ�޸ľ���ֵ,1Ϊ�޸�������Ʒ,2Ϊ�޸������Ʒ
    *id     �޸ĵ�id<����ָ�������е�����λ��,��ʹ��Furnaceinfo(type)ȥ��ȡ>
    *info   �޸�����,��typesΪ0,��ô����Ϊ����,�����Զ�Ĭ�ϸ�Ϊ0.��typesΪ 1,��ô����ΪItemStack ��Ʒ,typesΪ 2 Ҳ�����.
    
    
    
    //���ڴ��¸��汾!
    <����:�޾�̰��>
    
    <����:ֲ��ħ��>
    
    <����:�ȼ۽���>
    
    <�ȴ��������...>
   }
		}

		{��Ȼ��������(WIP):
			//���ڴ��´θ���
		}

		{Linked
			//���ڴ��´θ���
		}
	}
]




[*��չ*:
 Script���ű���:
 
 npc.getMCEntity().script.scripts.get(����).script=""
 ����npc�ű���ĳ�����ӵ�����,ȥ��=""��Ϊ��ȡ<���й����нű��ſɻ�ȡ,���򱨴�>,�磺npc.getMCEntity().script.scripts.get(0).script,���ֱ�ʾ�ű����ڹ���,���ִ�������:
 <0>   <1>    <2>    <3>      <4>     <5>      <6>        <7>       <8>     <9>       <10>
 ����  ����  �Ի�   �Ի���    �˺�    ɱ��     ����     Զ�̹���    ��ײ    ����    �رնԻ���
 ����繳��<�����õĹ��Ӳ��޽ű���Ϊ��>,����Ҫʹ�����з���:
 function Scriptwrite(list,Script){
 	if(npc.getMCEntity().script.scripts.get(list)==null){
 		var ScriptContainer=Java.type("noppes.npcs.controllers.ScriptContainer");
 		var Scripttext=new ScriptContainer();
 		npc.getMCEntity().script.scripts.put(list,Scripttext);
 	}
 	npc.getMCEntity().script.scripts.get(list).script=Script;
 }
 listΪ���Ӵ�������,ScriptΪ�ű�����,ʹ��������:Scriptwrite(1,"������Ľű���")
 
 function getScript(list){
 	if(npc.getMCEntity().script.scripts.get(list)==null){
 		return null;
 	}else{
 		return npc.getMCEntity().script.scripts.get(list).script;
 	}
 }
 �������˻�ϲ�������������ȡĳ�����ӵĽű�,�������ַ����ظù�������,���򷵻�null.
 
 npc.getMCEntity().script.enabled=��/��
 �Ƿ�������,��Ϊtrue����Ϊfalse
 
 npc.getMCEntity().script.engine="������"
 ���ýű�����,��:npc.getMCEntity().script.engine="ECMAScript"
]


-----------------------------------------------------------------------------------------
NPC�����Ǹ����ϣ�Ϊ�˲������ظ���npc�����е����¾������ٴγ��֣�����Ϊ��Ҫ��
-----------------------------------------------------------------------------------------
NPC�����Ǹ����ϣ�Ϊ�˲������ظ���npc�����е����¾������ٴγ��֣�����Ϊ��Ҫ��
-----------------------------------------------------------------------------------------
NPC�����Ǹ����ϣ�Ϊ�˲������ظ���npc�����е����¾������ٴγ��֣�����Ϊ��Ҫ��
-----------------------------------------------------------------------------------------



[item��Ʒ
getName()
��ȡ��Ʒ��ԭʼ����ͬ�������ܶ�,��ͬ�����ȡ��ͬ��
�磺player.getName()��ȡ�������,npc.getName()��ȡnpc����

getStackSize()
��ȡ��Ʒ������player.getHeldItem().getStackSize()��

hasCustomName()
��Ʒ�Ƿ����޸Ĺ����ơ�����������,���깤����װ̨����Ʒ���֡�

setCustomName("����")
������Ʒ�޸����ơ�player.getHeldItem().setCustomName("����")��

getDisplayName()
��ȡ��Ʒ����

getItemName()
��ȡ��Ʒ���ơ�ָ����ԭʼ������getName()һ����

setStackSize(����)
������Ʒ����

getItemDamage()
��ȡ��Ʒ��ֵ����������Ʒ����;ã���

setItemDamage(�;�)
������Ʒ��ֵ

getTag("nbt����")
��ȡ��Ʒ����ֵ����NBT��

setTag("nbt����","nbt")
������Ʒ����ֵ������setStoredData,setTempData,ֻ��������������ƷNBT�С�

hasTag("nbt����ֵ")
��Ʒ�Ƿ��иø���ֵ
]





[LivingBase + Living�����:
addPotionEffect(ҩˮid,ʱ��,����,��/��)
��ĳ����һ��Ч��������Ϊtrue������Ϊfalse���磺npc.addPotionEffect(7,10,0,true)��
{��չ:������buff
player.getMCEntity().func_82170_o(ҩˮid)
ɾ����ҵ�ҩˮЧ��,��ҿ��Ի�����������,��:npc.getMCEntity().func_82170_o(ҩˮid),world.getPlayer("test").getMCEntity().func_82170_o(ҩˮid)<ֻҪ�м̳�EntityLivingBase ���� ����>

player.getMCEntity().func_82165_m(ҩˮid)
����Ƿ���ĳ��ҩˮid��Ч��,������������ͬ����ʾ

player.getMCEntity().func_70651_bq()
��ȡ������ϵ�����ҩˮЧ��,������������ͬ����ʾ

function getActivePotionEffect(entity,id){
	var EntityLivingBase=Java.type("net.minecraft.entity.EntityLivingBase");
	var Potion=Java.type("net.minecraft.potion.Potion");
	if(entity.getMCEntity() instanceof EntityLivingBase && id=>0 && id<=Potion.field_76425_a.length && Potion.field_76425_a[id]!=null){
		return player.getMCEntity().func_70660_b(Potion.field_76425_a[id]);
	}
}
��ȡ������ϵ�ĳ��Ч����ʹ������:getActivePotionEffect(player,1)��
}

clearPotionEffects()
ɾ��������������ҩˮЧ����player.clearPotionEffects()��

getPotionEffect(ҩˮid)
��ȡ�������ϵ�ҩˮЧ��,��������û��ҩˮid�е�Ч��,�����-1 ��npc.getPotionEffect(1)��

canSeeEntity("ʵ��")
ȷ��ĳʵ���Ƿ���Կ���ʵ��

getMinecraftEntity()
��ȡEntityLivingBaseʵ��

swingHand()
��ʵ��Ӷ������ֱ�,�������Ч

getHeldItem()
��ȡ���е���Ʒ��ָ�������֣�NPC�����������֡�

setHeldItem(��Ʒ)
����������Ʒ����Ҫ�������߻�ȡ��Ʒ����player.setHeldItem(npc.getHeldItem()),��NPC���е���Ʒ������������ϡ�

isAttacking()
�����Ƿ��ڹ�����������,�������Ч��npc.isAttacking()��

setAttackTarget(ʵ��)
���ø����﹥��������,�������Ч��npc.setAttackTarget(world.getPlayer("test"))��

getAttackTarget()
��ȡ���������ڹ���������,����ScriptLivingBase,�������Ч��npc.getAttackTarget()��

navigateTo(x,y,z,�ٶ�)
������ǰ��x,y,z�����,�������Ч��npc.navigateTo(npc.x+5,npc.y,npc.z,1)��

isNavigating()
�����Ƿ�����ǰ��ĳ������,������Ӧ��npc.isNavigating()��
]



[Lores:

function addLore(item,lore){
			var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound")
	var NBTTagList=Java.type("net.minecraft.nbt.NBTTagList")
	var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
nbt=item.getMCItemStack().field_77990_d;
if(nbt==null){
nbt=new NBTTagCompound();
}
if(nbt.func_74775_l("display")=="{}"){
displayTag=new NBTTagCompound();
nbt.func_74782_a("display",displayTag);
}
if(nbt.func_74775_l("display").func_74781_a("Lore")==null){
loreList=new NBTTagList();
nbt.func_74775_l("display").func_74782_a("Lore",loreList);
}
item.getMCItemStack().field_77990_d=nbt;
loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
loreList.func_74742_a(new NBTTagString(lore))
}
//Ϊ��Ʒ����lore
/*
*ScriptItemStack item:Ҫ����lore����Ʒ
*String lore:Ҫ���ӵ�lore
*/

function getLore(item,line)
{
var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
Item=item.getMCItemStack();
var nbt=Item.field_77990_d;
if(nbt==null)
{
return -1
};
if(nbt.func_74775_l("display")!==null)
{
var loreLength=nbt.func_74775_l("display").func_150295_c("Lore",8).func_74745_c();
if(line<=loreLength)
{
var lore=nbt.func_74775_l("display").func_150295_c("Lore",8).func_150307_f(line)
return lore
}
}
else
{
return -1
}
}

function setLore(item,line,lore)
{
var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
try
{
loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
loreList.func_150304_a(line,new NBTTagString(lore))
}
catch(err)
{
print("�ڲ���lore�����쳣,��������Ϊû��lore �뽫�����ṩ������:"+err)
}
};
//�޸���Ʒloreĳһ��
/*
*ScriptItemStack item:Ҫ�޸�lore����Ʒ
*int line:Ҫ�޸�lore������
*String lore:�滻ԭ��lore��lore
*/
]

[���Ը���:
if(player.getHeldItem()!==null){
var name=""+player.getHeldItem().getDisplayName()+""
var x=name.length
var str1=name.substring(6,7)
var str2=name.substring(0,6)
var str3=name.substring(7,x)
uplevel(player.getHeldItem(),str1)
}else{npc.say("��a��l���ֿտ�����ɶ���Ҳ���ǿ�����ȭͷ")}

function uplevel(item,num)
{
       if(num == 0)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=1
       item.setCustomName(str2+level+str3)
       player.sendMessage("��a��l�㾭����иŬ��,��"+str2+str1+str3+"��a��l����Ϊ"+str2+level+str3+"��a��l!")
       return;
       }

       if(num == 1)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=2
       item.setCustomName(str2+level+str3)
       player.sendMessage("��a��l�㾭����иŬ��,��"+str2+str1+str3+"��a��l����Ϊ"+str2+level+str3+"��a��l!")
       return;
       }

       if(num == 2)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=3
       item.setCustomName(str2+level+str3)
       player.sendMessage("��a��l�㾭����иŬ��,��"+str2+str1+str3+"��a��l����Ϊ"+str2+level+str3+"��a��l!")
       return;
       }

       if(num == 3)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=4
       item.setCustomName(str2+level+str3)
       player.sendMessage("��a��l�㾭����иŬ��,��"+str2+str1+str3+"��a��l����Ϊ"+str2+level+str3+"��a��l!")
       return;
       }

       if(num == 4)
       {
       updateAttr(player.getHeldItem(),1,0.1,1);
       updateAttr(player.getHeldItem(),2,0.1,1);
       var level=5
       item.setCustomName(str2+level+str3)
       player.sendMessage("��a��l�㾭����иŬ��,��"+str2+str1+str3+"��a��l����Ϊ"+str2+level+str3+"��a��l!")
       return;
       }

       if(num == 5)
       {
       player.sendMessage("��a��l�����Ʒ�Ѵ�������״̬���޷�����!")
       return;
       }

 
}

function updateAttr(item, type, value, operation)
{
	if (value == 0) { return; }
	if (type == 1) { type = "generic.attackDamage"; }
	else if (type == 2) { type = "generic.maxHealth"; }
	else if (type == 3) { type = "generic.movementSpeed"; }
	else if (type == 4) { type = "generic.knockbackResistance"; }
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null) { root = new NBTTagCompound(); }
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var tagCompound = attributeModifiers.func_74745_c();
	for (var i = 0; i <= tagCompound; i++)
	{
		s = attributeModifiers.func_150305_b(i);
		if (i == tagCompound)
		{
			add(item, type, value, operation);
			break;
		}
		if (s.func_74779_i("AttributeName") == type && s.func_74762_e("Operation") == operation)
		{
			var newvalue = s.func_74769_h("Amount") + Number(value);
			s.func_74780_a("Amount", newvalue);
			break;
		}
	}
	return;
}

function add(item, attribute, amount, operation)
{
	var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
	var UUID = Java.type("java.util.UUID");
	var itemStack = item.getMCItemStack();
	var root = itemStack.field_77990_d;
	if (root == null)
	{
		root = new NBTTagCompound();
	}
	var attributeModifiers = root.func_150295_c("AttributeModifiers", 10);
	var attributeModifier = new NBTTagCompound();
	var uuid = UUID.randomUUID();
	attributeModifier.func_74778_a("AttributeName", attribute);
	attributeModifier.func_74778_a("Name", "My Modifier");
	attributeModifier.func_74780_a("Amount", amount);
	attributeModifier.func_74768_a("Operation", operation);
	attributeModifier.func_74772_a("UUIDMost", uuid.getMostSignificantBits());
	attributeModifier.func_74772_a("UUIDLeast", uuid.getLeastSignificantBits());
	attributeModifiers.func_74742_a(attributeModifier);
	root.func_74782_a("AttributeModifiers", attributeModifiers);
	itemStack.field_77990_d = root;
	return;
}

]

[player:
getDisplayName()
��ȡ������֡�ϸ��:�����������,Ҳ�ǻ�ȡ�������,�����ǻ�ȡ��ҷ���ָ�������,����ָ��ʱ�����ֿ����޸�?!��û�з���ָ����,��Ĭ��ΪRcon[δ������]��

getName()
��ȡ������֡�������֡�

setPosition(x,y,z)
�������λ�á�������NPC��

hasFinishedQuest(����id)
����Ƿ�����˸��������磺npc.say(world.getPlayer("����").hasFinishedQuest(����id))��

hasActiveQuest(����id)
����Ƿ����ڽ��и�����

hasReadDialog(�Ի�id)
����Ƿ��Ѿ���ɸöԻ�

startQuest(����id)
����ҿ�ʼ������

finishQuest(����id)
�������ɸ�����

stopQuest(����id)
�����ֹͣ������

removeQuest(����id)
���������ɾ����������ɵġ�

addFactionPoints("��Ӫ",����)
�����������Ӫ�������ɽ�������Ϊ������

getFactionPoints("��Ӫ")
��ȡ��Ҹ���Ӫ����

sendMessage("��Ϣ")
����ҷ�����Ϣ����tellrawһ����
{��չ:����������Ϣ
/*ʹ�ý̳�:
click��:
0Ϊ��ַ����������ҳ��
1Ϊ�򿪵��ļ�·���������򿪸��ļ�·����
2Ϊִ�е�ָ�������ʹ�������ָ�
3Ϊ�����Ϣ��player.getMCEntity().func_145747_a(player.getMCEntity().func_145748_c_()),�����������,������,������ԶԻ���ʽչʾ,������ɿ��msg��ҡ�
4Ϊ�Ƽ����ִ�е�ָ���������������봰��ճ�����ݡ�
hover��:
0Ϊ��ʾ���ı�������ƶ������ֶ�ʱ��ʾһ���ı���
1Ϊ��ʾ�ɾ�,���鿴net.minecraft.stats.AchievementList��������ʾ�ɾ�,��ͨ�������޸���nbt��ʵ�ַ���һ�α��޸����ݵĳɾ�,��:����:���Ż���,����:hooooo��
3Ϊ��ʾ��Ʒnbt,���������ݲ�ΪNBTTagCompoundʵ������Ч��player.getMCEntity().func_145747_a(player.getHeldItem().getMCItemStack().func_151000_E()),�����������,������,�����������Ʒ�ԶԻ���ʽչʾ��ȥ��

����ʾ������:

var chat=new sendChat("��Ϣ").chat();//����һ����Ϣ,����Ϊ"��Ϣ"
player.getMCEntity().func_145747_a(chat);//����ҷ�����Ϣ

var chat=new sendChat("��Ϣ").click(0,"https://www.baidu.com/").chat();//����һ����Ϣ,����Ϊ"��Ϣ",����������ҳ"https://www.baidu.com/"
player.getMCEntity().func_145747_a(chat);//����ҷ�����Ϣ

var chat=new sendChat("��Ϣ").hover(0,"test!\ntwotest!\nthreetest!hahha").chat();//����һ����Ϣ,����Ϊ"��Ϣ",����ƶ�������Ϣ����ʾ"test!\ntwotest!\nthreetest!hahha",\n���ڷֶ�
player.getMCEntity().func_145747_a(chat);//����ҷ�����Ϣ

var chat=new sendChat("��Ϣ").hover(0,"test!\ntwotest!\nthreetest!hahha").click(0,"https://www.baidu.com/").chat();
player.getMCEntity().func_145747_a(chat);

var chat=new sendChat("��Ϣ").hover(0,"test!\ntwotest!\nthreetest!hahha").chat();
var chat1=new sendChat("��Ϣ").hover(0,"test!\ntwotest!\nthreetest!hahha").appendSibling(chat).chat()
player.getMCEntity().func_145747_a(chat1);

var chat=new sendChat("��Ϣ").click(1,"C:");//����һ����Ϣ,����Ϊ"��Ϣ",������C��,�Կͻ��˽���
player.getMCEntity().func_145747_a(chat);//����ҷ�����Ϣ

����������㷢��!
*/
function sendChat(text){
	var ChatComponentTranslation=Java.type("net.minecraft.util.ChatComponentTranslation");
	var HoverEvent=Java.type("net.minecraft.event.HoverEvent");
	var HoverAction=Java.type("net.minecraft.event.HoverEvent.Action");
	var ClickEvent=Java.type("net.minecraft.event.ClickEvent");
	var ClickAction=Java.type("net.minecraft.event.ClickEvent.Action");
	var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound");
	var IChatComponent=Java.type("net.minecraft.util.IChatComponent");
	var String=Java.type("java.lang.String");
	this.text=text;
	this.Chat=this.text instanceof IChatComponent?this.text:new ChatComponentTranslation(this.text,{});
	this.ChatStyle=this.Chat.func_150256_b();
	this.click=function(action,string){
		switch(action){
			case 0:
			action=ClickAction.OPEN_URL;
			break;
			case 1:
			action=ClickAction.OPEN_FILE;
			break;
			case 2:
			action=ClickAction.RUN_COMMAND;
			break;
			case 3:
			action=ClickAction.TWITCH_USER_INFO;
			break;
			case 4:
			action=ClickAction.SUGGEST_COMMAND;
			break;
		}
		this.ChatStyle.func_150241_a(new ClickEvent(action,string));
		return new sendChat(this.Chat);
	}
	this.hover=function(action,value){
		switch(action){
			case 0:
			action=HoverAction.SHOW_TEXT;
			if((value instanceof String)){
				value=new ChatComponentTranslation(value.toString(),{});
			}
			break;
			case 1:
			action=HoverAction.SHOW_ACHIEVEMENT;
			//�ɾ�,����鿴net.minecraft.stats.AchievementList
			break;
			case 2:
			action=HoverAction.SHOW_ITEM;
			if(!(value instanceof NBTTagCompound)){
				value=new ChatComponentTranslation(new NBTTagCompound(),{});
			}
			break;
		}
		this.ChatStyle.func_150209_a(new HoverEvent(action,value));
		return new sendChat(this.Chat);
	}
	this.appendSibling=function(chat2){
		chat2=chat2 instanceof IChatComponent?chat2:new ChatComponentTranslation(chat2.toString(),{});
		return new sendChat(this.Chat.func_150257_a(chat2));
	}
	this.chat=function(){
		return this.Chat;
	}
}
}

getMode()
��ȡ���ģʽ��0Ϊ���棬1Ϊ���죬2Ϊð��

setMode(ģʽ)
�������ģʽ���磺player.setMode(1)��

inventoryItemCount(��Ʒ)
��ȡ��ҵ���Ʒ�ж��١��磺player.inventoryItemCount(player.getHeldItem())��

getInventory()[����]
��ȡ��ұ���,����ȡ35���������磺player.getInventory()[0].getName()����ȡ��ұ����е�һ��������Ʒ������<�������½ǵ��Ǹ�>��

removeItem("��Ʒ",�;�,����)
ɾ����ҵ���Ʒ���;ÿ�ʡ�Բ���,������Ʒ��ҪΪScriptItemStackʵ��,��:player.getHeldItem()���Ի�ȡ������ʵ����<���ӣ�player.removeItem("minecraft:stone",0,1)>

giveItem("��Ʒ",�;�,����)
�����ĳ����Ʒ���;ÿ�ʡ�Բ���,������Ʒ��ҪΪScriptItemStackʵ����

setSpawnpoint(x,y,z)
������Ҹ����

resetSpawnpoint()
������Ҹ����

removeAllItems(��Ʒ)
����ұ�����ĳ����Ʒɾ��

hasAchievement("�ɾ�")
����Ƿ�����˸óɾ͡��ɾͽ϶࣬�ٷ��Ƽ���վ��http://minecraft.gamepedia.com/Achievements��

hasBukkitPermission("Ȩ��")
����Ƿ�ӵ�и�Ȩ�ޡ�lj����û��CK�����mod+��������,���׷���û��Ҫ����� :-> ��{���ռ�Ȩ������
����ȫ��δ������,δ֪Ч�� ;-;
NPC_DELETE
NPC_CREATE
NPC_GUI
NPC_FREEZE
NPC_RESET
NPC_AI
NPC_ADVANCED
NPC_DISPLAY
NPC_INVENTORY
NPC_STATS
NPC_CLONE
GLOBAL_LINKED
GLOBAL_PLAYERDATA
GLOBAL_BANK
GLOBAL_DIALOG
GLOBAL_QUEST
GLOBAL_FACTION
GLOBAL_TRANSPORT
GLOBAL_RECIPE
GLOBAL_NATURALSPAWN
SPAWNER_MOB
SPAWNER_CREATE
TOOL_MOUNTER
TOOL_PATHER
TOOL_SCRIPTER
EDIT_VILLAGER
EDIT_BLOCKS
SOULSTONE_ALL
}

getExpLevel()
��ȡ��ҵȼ�

setExpLevel(�ȼ�)
������ҵȼ�

isEnchanted()
��Ʒ�Ƿ��и�ħ

hasEnchant(id)
��Ʒ�Ƿ��иø�ħid


{*��չ:���������ҵĲ���

/*�޸��������,����ỹԭ����,���������������޸ĵ�����Ѫ����ʾ������ʧ,�����������ֵ����ı�,ֻ�贩���������������ֵ��װ������Ʒ���ɻָ�
*player ����ScriptPlayerʵ��,��:world.getPlayer("test")
*type   0Ϊ������,1Ϊ�ƶ��ٶ�,2Ϊ��������,3Ϊ�������ֵ,�ƶ��ٶ���minecraft�໥��ͻ,�޸�������ٺ���Զ���ԭ�������ٶ�.
*amount �޸ĵ���ֵ,��null��Ϊ��ȡ�����Ե���ֵ
*���Ҫ�ø÷�������������Ʒ��������,�����üƷְ�<deathCount>���,��������ӷ�,�������ڵ���1,��������,���÷���Ϊ0  :)
*/
function EntityAttributes(player,type,amount){
	var SharedMonsterAttributes=Java.type("net.minecraft.entity.SharedMonsterAttributes");
	var Attributes;
	if(type==0){
		Attributes=SharedMonsterAttributes.field_111264_e
	}
	if(type==1){
		Attributes=SharedMonsterAttributes.field_111263_d
	}
	if(type==2){
		Attributes=SharedMonsterAttributes.field_111266_c
	}
	if(type==3){
		Attributes=SharedMonsterAttributes.field_111267_a
	}
	if(amount==null){
		return player.getMCEntity().func_110140_aT().func_111151_a(Attributes).func_111125_b();
	}else{
		player.getMCEntity().func_110140_aT().func_111151_a(Attributes).func_111128_a(amount);
		return;
	}
}

player.getMCEntity().func_71024_bL().func_75114_a(��ֵ)//������Ҽ���ֵ
player.getMCEntity().func_71024_bL().func_75116_a()//��ȡ��Ҽ���ֵ
player.getMCEntity().func_96124_cp()//��ȡ������ڶ���
}
]





[�¼�:
 isCancelled()
 �Ƿ����¼�

 setCancelled(��/��)
 �����¼��Ƿ�����ȡ��Ϊtrue�����������Ϊfalse����event.setCancelled(true),�����˺�������,npc�Ͳ����ܵ��˺��ˡ�

{�˺��¼���
 getSource()
 ��ȡ�˺�Դ<��������>���磺event.getSource().getName()��

 getType()
 ��ȡ�ܵ����˺����͡�event.getType()��
 �˺����ͣ�{
 lava,�ҽ��˺�
 inFire,�����˺������ʯ�Ҽ����µĻ�
 onFire,�Ż��˺������ҽ��ջ���������ɵĻ�
 fall,ˤ���˺�
 player,����˺�
 mob,�����˺�
 dronwn,��ˮ�˺�
 outOfWorld,��������˺�
 explosion,��ը�˺�
 anvil,��������˺�
 arrow,�����˺�
 thrown,��͡�������˺�������NPC�е�ǹ,ħ��,���ڵȵȡ�
 magic,ħ�����ж����˺�
 indirectMagic,��ӡ�˲���˺���ħ��
 cactus,�������˺�}

 getDamage()
 ��ȡ�˺�ֵ��event.getDamage(),��ȡnpc�ܵ����˺���ֵ��
}

{�Ի��¼���
 isClosing()
 �Ƿ�رնԻ�
	
	���ñ���://����noppes.npcs.NoppesUtilServer 198���ҵ�
	event:�����¼�ʵ��
	player:�򿪶Ի������
	dialog:�򿪵ĶԻ�id
	ʹ������:
	npc.say(dialog);//ճ���� �ڶ����Ի�
	npc.say(player);//ճ���� �ڶ����Ի�
	}
	
{�رնԻ��¼�://������ΪӦ�ý� �Ի���ѡ�� �¼�
 ���±���://����noppes.npcs.NoppesUtilPlayer 240���ҵ�
	player:�򿪵ĶԻ������
	dialog:��ǰ�Ի�id
	option:������� ѡ��,���ϵ��´�1��ʼ
	ʹ������:
	npc.say(option);//ճ���� �رնԻ��¼�
	npc.say(dialog);//ճ���� �رնԻ��¼�
}

{�����¼�:
 isRange()
 �����Ƿ��ڹ�����Χ

 getTarget()
 ��ȡ��������

 getDamage()
 ��ȡ������ɵ��˺���event.getDamage()��

 setDamage(��ֵ)
 ������ɵ��˺���event.setDamage(5),����npcÿ�ι�����ֻ��5���˺��ˡ�
}

{Զ�̹����¼���
 getTarget()
 ��ȡ��������

 setTarget(��������)
 ����NPC��������,��Ҫ����ScriptLivingBaseʵ����event.setTarget(world.getPlayer("�������")),ճ����Զ�̹���[target]��,����npc������Χ���еж���ӪҲ���ṥ��,���ǹ�����Ϊ"�������"����ҡ�
}

{�����¼�:
 getSource()
 ��ȡɱ��npc�����event.getSource()��

 getType()
 ��ȡɱ��npc���˺��������֡�event.getType()��
}
]





[ʵ��:
       getX()  getY()   getZ()
��ȡ     x       y        z    λ��

       setX()  setY()   setZ()
����     x       y        z    λ��

         getBlockX()    getBlockY()    getBlockZ()
��ȡ����     x              y              z         λ��

getSurroundingEntities(��Χ,����)
��ȡ��Χʵ�塾���ﲻ��,��ô����ȡ��Χ����������,������б��ڵ���������,��Ϊ��ȡ�������<1Ϊ���,2ΪNPC,3Ϊ����,4Ϊ����,5Ϊ���ŵ���������>
{��չ:���ǵķ�Χ������
	
}

getSurroundingEntities(��Χ,����).length
��ȡ��Χʵ������

isAlive()
ȷ��ʵ���Ƿ���š�npc.isAlive()��

getTempData("��ʱ��������")
��ȡ��ʱ���ݡ���û����,�޷���ȡ,��ȡֵΪnull��

setTempData("��ʱ��������",��ʱ����)
����һ����ʱ����                              ����������£�����Կ�ʹ��<world,player,entity,npc�ȵȡ�>��PS:item��һ��tag��
���磺npc.setTempData("k","ss")
      npc.say(npc.getTempData("k"))��
	  
hasTempData("��ʱ��������")
ȷ����ʱ�����Ƿ����

removeTempData("��ʱ��������")
ɾ����ʱ����

clearTempData()
ɾ��������ʱ����

getStoredData("������������")
��ȡ��������

setStoredData("������������",��������)
���ô������ݡ���������ʱ����һ�����÷���

hasStoredData("������������")
ȷ�ϴ��������Ƿ����

removeStoredData("������������")
ɾ����������

clearStoredData()
ɾ�����д�������

despawn()
ɾ�����ʵ��<Ҳ����ֱ��npc.despawn()>

inWater()
���ʵ���Ƿ���ˮ��

inLava()
���ʵ���Ƿ����ҽ���

inFire()
���ʵ���Ƿ��ڻ��С������ô��ʯ�Ҽ����µĻ�

isBurning()
���ʵ���Ƿ������Ż�

setBurning(ʱ��)
�������ʵ���Ż��ʱ�䡾20ticks��1��,�磺npc.setBurning(100)��

extinguish()
�Ƴ����ʵ���Ż�״̬

getTypeName()
��ȡ���ʵ���ڡ�noppes���е���������

dropItem("��Ʒ")
�Ե������ʽ����һ����Ʒ����:player.dropItem(player.getHeldItem())��

getRider()
��ȡ�����ʵ��

setRider(ʵ��)
����ʵ������ĳ��ʵ���ϡ���:npc.setRider(player)��ҿ�������NPC�ϡ�

getMount()
��ȡ����ĳʵ���<ʵ��>

setMount(ʵ��)
��������ĳʵ���<ʵ��>���磺npc.setMount(player)NPC������������ϡ�

setRotation(����)
������ת������0-360��

getRotation()
��ȡ��ת����

knockback(ǿ��,�Ƕ�)
��������磺player.knockback(5,-180)��

isSneaking()
���ʵ���Ƿ�����Ǳ��

isSprinting()
���ʵ���Ƿ����ڼ���]





[world��
getMCWorld()
��ȡ��ǰ����ʵ��

getTime()
��ȡ��ǰ����ʱ�䡾�磺npc.say(world.getTime())��

getTotalTime()
��ȡ����ͳһʱ��

getBlock(x,y,z)
��ȡx,y,zλ�õķ��顾�磺world.getBlock(x,y,z).getName()��<��ȡx,y,z��nbt������>

getSignText(x,y,z)
��ȡx,y,zλ�õ�ľ�����ݡ��磺npc.say(world.getSignText(npc.x,npc.y,npc.z))��<��ȡNPCλ�õ�ľ������>

setBlock(x,y,z,��Ʒ)
����x,y,zλ�õķ��顾�磺world.setBlock(npc.x,npc.y-1,npc.z,world.createItem("minecraft:packed_ice",1,1))��<��NPC��������һ��ʯͷ>

removeBlock(x,y,z)
ɾ��x,y,zλ�õķ���

getPlayer("����")
��ȡ��ҡ�world.getPlayer("�������")��,ֻ��ȡ������ģ��������ȡȫ���磡

setTime(ʱ��)
���õ�ǰʱ�䡾��/time set ʱ��  һëһ����

isDay()
�Ƿ�Ϊ����

isRaining()
�Ƿ�����

setRaining()
����������0Ϊ���죬1Ϊ���꡾����Σ�����Ϊ0���죬Ϊ���������꡿

thunderStrike(x,y,z)
��x,y,z�ٻ����硾world.thunderStrike(x,y,z)��

spawnParticle("����Ч��",x,y,z,dx,dy,dz,�ٶ�,����)
��x,y,z���ٻ�����Ч����dx�����xλ��,����Ҳһ������<����Ч����{>
note    ����
lava    �ҽ���Ծ��ɢ�䡿
cloud   ����ɢ�䡿
crit    ����������ʮ���ǡ�ɢ�䡿
reddust ��ɫ����
largeexplode   С�ͱ�ըЧ��
hugeexplosion  ���ͱ�ըЧ����ɢ�䡿
flame   �𻨡�ɢ�䡿
heart   ����
slime   ʷ��ķ����
snowballpoof    ��ѩ��
largesmoke      ���̡�ɢ�䡿
townaura        ���̡�С�͡�
explode  ����ɢ�䡿
portal   ���������ӡ��������¡�
smoke    �Һ���ɢ�䡿
splash   ˮ����ɢ�䡿
enchantmenttable �����Ʈ��ħ̨�����֡�������ָ���ص�ۼ���
instantSpell    ��ɫX�ο�����ɢ�䡿
mobSpell ��ɫҩˮЧ�����������ϡ�
spell    ��ɫҩˮЧ����ɢ�䡿
magicCrit ǳ��ɫ�������ӡ�ɢ�䡿
footstep ��ӡ
dripLava �컨������ˮ
dripWater       �컨�������ҽ�
snowshovel ��ɫ���ӡ�ɢ�䡿
wake     ��ɫ���ӡ�ɢ�䡿
mobSpellAmbient  ����ɫҩˮЧ�����������ϡ�
angryVillager   ��������
happyVillager   �����ġ���״��ɫ���ӡ�
witchMagic ��ɫX״��ɢ�䡿}

explode(x,y,z,��Χ,�Ƿ������,�Ƿ��ƻ�����)
��x,y,z������һ����ը�������������ƻ����飬��false������Ҫ������true��

getAllServerPlayers()
��ȡ��������������ҡ�world.getAllServerPlayers(),��ȡ��������Ϊ����,����������ҵ�����¿���world.getAllServerPlayers()[0]��ȡ��Ӧ���,˳���յ�¼˳������.��

spawnClone(x,y,z,��ǩ,����)
����һ��NPC<���ӣ�world.spawnClone(npc.x,npc.y,npc.z,1,"�ұ�������")>�����Ȱ��б�1������Ϊ<�ұ�������>���ƽ����縴��ѡ�[���������Ÿ���ħ���Ҽ�NPC��Ȼ�������·���Client side��Client side���ΪServer side��tab���ݱ�ǩ��λ������Ȼ��������ͺ��ˣ�]

getBiomeName(x,z)
��ȡx,z���ĵ�������}



npc.setName("��f��l�Ҽ������4��l��n���ظ��²�")
npc.setTitle("��f��lҪ�����ա�4��l��n�����껷")

[���飺
getScoreboard()
��ȡ����/�Ʒְ���Ҫʹ�����з�����������.�磺world.getScoreboard()��

{�Ʒְ�:
getObjectives("����")
��ȡ�Ʒְ����ֿɲ����Ϊ��ȡ���мƷְ�

getObjective("����")
��ȡ������ȡĳ���Ʒְ�world.getScoreboard().getObjective("test")��

hasObjective("�Ʒְ�����")
ȷ���Ƿ�������Ʒְ�

removeObjective("�Ʒְ�����")
ɾ���Ʒְ�world.getScoreboard().removeObjective("test")��

addObjective(����,Ŀ��)
���һ���Ʒְ�world.getScoreboard().addObjective("test","dummy")��������Ŀ��࣬��������վ�鿴��http://minecraft.gamepedia.com/Scoreboard#Objectives��

setPlayerScore("���","�Ʒְ�����",����,ָ������)
���������ĳ�Ʒְ��еķ�������δ����ָ�����ͣ���ô�Ʒְ����ּ�Ϊָ�����͡�

getPlayerScore("���","�Ʒְ�����",ָ������)
��ȡ�����ĳ�Ʒְ��еķ�������δ����ָ�����ͣ���ô�Ʒְ����ּ�Ϊָ�����͡�

hasPlayerObjective("���","�Ʒְ�����",ָ������)
ȷ������Ƿ���ĳ���Ʒְ��С���δ����ָ�����ͣ���ô�Ʒְ����ּ�Ϊָ�����͡�

deletePlayerScore("���","�Ʒְ�����",ָ������)
ɾ�������ĳ�Ʒְ��е����з�������δ����ָ�����ͣ���ô�Ʒְ����ּ�Ϊָ�����͡�

getCriteria()
��ȡ�Ʒְ���������world.getScoreboard().getObjective("test").getCriteria()��

isReadyOnly()
ȷ�������Ƿ���Ը��ġ�world.getScoreboard().getObjective("test").isReadyOnly()��
}


{���飺
getTeams()
��ȡȫ�����顾world.getScoreboard().getTeams()��

getTeam("��������")
��ȡȫ�����顾world.getScoreboard().getTeam("test")��

hasTeam("��������")
ȷ���Ƿ���������顾npc.say(world.getScoreboard().hasTeam("a")),ȷ�϶���"a"�Ƿ���ڡ�

addTeam("��������")
���һ�����顾world.getScoreboard().addTeam("a"),���һ������Ϊ"a"�Ķ���,�������"a"�����򱨴�

getTeam("��������")
��ȡ���顾world.getScoreboard().getTeam("a")����ȡ��Ϊ"a"�Ķ��顿

removeTeam("��������")
ɾ��ĳ�����顾world.getScoreboard().removeTeam(world.getScoreboard().getTeam("test")),ɾ����һ�����顿

getName()
��ȡ�������֡�ͬ�������ܶ�,��ͬ�����ȡ��ͬ��

getDisplayName()
��ȡ��ʾ���֡�ͬ�������ܶ�,��ͬ�����ȡ��ͬ��

setDisplayName(����)
������ʾ���֡�����1-32��������

addPlayer("����")
��ĳ���������һ����ҡ�world.getScoreboard().getTeam("test").addPlayer("name"),���һ�����������Ϊ"name"����ҡ�

removePlayer("����")
�Ƴ�ĳ���������ҡ�world.getScoreboard().getTeam("test").removePlayer("name"),�ڵ�һ���������Ƴ���Ϊ"name"����ҡ�

getPlayers()
��ȡĳ�������������

clearPlayers()
�Ƴ�ĳ������������ҡ�world.getScoreboard().getTeam("test").clearPlayers(),����һ����������������Ƴ���

getFriendlyFire()
��ȡ�Ƿ��������PVP

setFriendlyFire(��/��)
�����Ƿ��������PVP,��Ϊtrue,��Ϊfalse��world.getScoreboard().getTeam("test").setFriendlyFire(true)��

setColor("��ɫ")
���ö�����ɫ,��ɫ����:<BLACK,DARK_BLUE,DARK_GREEN,DARK_AQUA,DARK_RED,DARK_PURPLE,GOLD,GRAY,DARK_GRAY,BLUE,GREEN,AQUA,RED,LIGHT_PURPLE,YELLOW,WHITE,OBFUSCATED,BOLD,STRIKETHROUGH,UNDERLINE,ITALIC,RESET>
��world.getScoreboard().getTeam("test").setColor("DARK_BLUE")��

getColor()
��ȡ������ɫ

setSeeInvisibleTeamPlayers(��/��)
���ö���ӵ������buffʱ�Ƿ���Կ���,��Ϊtrue,��Ϊfalse��world.getScoreboard().getTeam("test").setSeeInvisibleTeamPlayers(true)��

getSeeInvisibleTeamPlayers()
��ȡ����֮��ӵ������buffʱ�Ƿ���Կ���
}]





[���θ�������<����>:
///������ֻ�ṩģ���Լ�ʹ�ý̳�!ע�ͻ�д�ú����,������,����û������� :-( ----by ���ͽ����ͽ���
///��������ģ��ԭ�ⲻ����������<�ڸ�������,���¼�һ��var test="test";���ܰ��㵱�ɶ��δ���>,��Ϊ��Ȩ,������δ�������!���δ���������������ҵ��;�����ģ�����!
///������ģ���ֹ�����������߻�ͬ���ͽű����бȽ�<�þ���,bbnm?>������Ե,��������!
///���ʽ�Ƕ��δ����ߵ���,�����޹� :-)     ----by ���ͽ����ͽ���
{��Ƕģ��[Item]<δ���>:
	//���ڴ��¸��汾
	function Set(Item,Stone){
		
	}
	function CreateStone(Item,ench,Unbreakable,Attribute){
		var Enchantment=Java.type("net.minecraft.enchantment.Enchantment");
		var pb,pc=[];
		var lore=[
		"��4��l========��5��l<����>��4��l========",
		]
		if(Item!=null){
			if(ench instanceof Array){
				lore.push("��5��ħ:");
				for(var pa in Enchantment.field_77331_b.length){
					if(Enchantment.field_77331_b[pp]!=null){
						pb++;
					}
				}
				for(var a in ench){
					if(ench[a].id!=null && ench[a].id<=pb && ench[a].id>=0){
						lore.push(Enchantment.field_77331_b[ench[a].id].func_77316_c(ench[a].lvl));
					}
				}
			}
			if(Unbreakable){
				lore.push("��8�޷��ƻ�:��");
			}
			if(Attribute instanceof Array){
				for(var b in Attribute){
					pc[b]=Attribute[b].operation==1 || Attribute[b].operation==2?"%":null;
					if(Attribute[b].����ֵ!=null){
						lore.push("��c����ֵ:"+Attribute[b].����ֵ+pc[b]);
					}
					if(Attribute[b].��������!=null){
						lore.push("��9��������:"+Attribute[b].��������+pc[b]);
					}
					if(Attribute[b].�ٶ�!=null){
						lore.push("��7�ٶ�:"+Attribute[b].�ٶ�+pc[b]);
					}
					if(Attribute[b].������!=null){
						lore.push("��4������:"+Attribute[b].������+pc[b]);
					}
				}
			}
		}
		npc.say("��Ʒ����");
		return;
	}
	/*
	Item >> ��Ʒ,����ScriptItemStackʵ��
	ench >> ��ħ,����Array����,��:[{"id":0,"lvl":5},{"id":9,"lvl":1}]
	Unbreakable >> ����,����Boolean,��:trueΪ�޷��ƻ�
	Attribute >> ����,����Array����,��:[{"����ֵ":9,"operation":0},{"������":7,"operation":2}]
	*/
	function CreateItem(){
		
	}
}

{CDģ��[Item&Entity]:
	//���ڴ��¸��汾
}
]


�о���Ŀ��
ee2��
����:
