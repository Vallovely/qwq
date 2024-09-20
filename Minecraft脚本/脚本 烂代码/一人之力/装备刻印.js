var apl=world.getAllServerPlayers()
for(i in apl){
	if(apl[i].getHeldItem()!==null&&apl[i].isSneaking()==true){
		if(apl[i].getHeldItem().getDisplayName().indexOf("§7§l[未鉴定]")!=-1){
			var delta1=Math.random()*100//delta1∈[0,1)
			if(delta1<30){
				apl[i].getHeldItem().setCustomName(apl[i].getHeldItem().getDisplayName().replace("§7§l[未鉴定]","§f§l[普通]"))
				setAttr(apl[i].getHeldItem(),"§f>> §7§l装备强度 ","§f■§7■■■■")
			}//30%
			if(delta1>=30&&delta1<55){
				apl[i].getHeldItem().setCustomName(apl[i].getHeldItem().getDisplayName().replace("§7§l[未鉴定]","§2§l[优秀]"))
				setAttr(apl[i].getHeldItem(),"§f>> §7§l装备强度 ","§2■■§7■■■")
			}//25%
			if(delta1>=55&&delta1<75){
				apl[i].getHeldItem().setCustomName(apl[i].getHeldItem().getDisplayName().replace("§7§l[未鉴定]","§9§l[精良]"))
				setAttr(apl[i].getHeldItem(),"§f>> §7§l装备强度 ","§9■■■§7■■")
			}//20%
			if(delta1>=75&&delta1<90){
				apl[i].getHeldItem().setCustomName(apl[i].getHeldItem().getDisplayName().replace("§7§l[未鉴定]","§5§l[史诗]"))
				setAttr(apl[i].getHeldItem(),"§f>> §7§l装备强度 ","§5■■■■§7■")
			}//15%
			if(delta1>=90){
				apl[i].getHeldItem().setCustomName(apl[i].getHeldItem().getDisplayName().replace("§7§l[未鉴定]","§6§l[传说]"))
				setAttr(apl[i].getHeldItem(),"§f>> §7§l装备强度 ","§6■■■■■")
				var apl2=world.getAllServerPlayers()
				for(i in apl2){
					apl2[i].sendMessage("§f恭喜§e"+apl[i].getName()+"§f获得了"+apl[i].getHeldItem().getDisplayName())
				}
			}//10%
			setAttr(apl[i].getHeldItem(),"§f>> §7§l物品主人 ","§e§l"+apl[i].getName())
			npc.executeCommand("/playsound random.anvil_use "+apl[i].getName())
		}
	}
}

function getAttr(item,atr){
	if(item!=null){
		for(var i=0;getLoreContent(item,i)!=undefined;i++){
			if(getLoreContent(item,i).indexOf(atr)!=-1){
				return getLoreContent(item,i).slice(getLoreContent(item,i).indexOf(atr)+atr.length);//字符串类型 若要转Number需手动
			}
		}
		return 0;
	}
	return 0;
	//获取属性值
    /*
    *ScriptItemStack item:被操作的物品
    *str atr:属性名
    */
}
function setAttr(item,atr,value){
	if(item!=null){
		for(var i=0;getLoreContent(item,i)!=undefined;i++){
			if(getLoreContent(item,i).indexOf(atr)!=-1){
				setLoreContent(item,i,atr+value);
				return;
			}
		}
		addLoreContent(item,atr+value);
	}
	return;
	//修改属性值
	/*
	*ScriptItemStack item:被操作的物品
	*str atr:属性名
	*int value:属性新值
	*/
}

function getNumber(str){
	return Number(str.replace(/[^0-9]/ig,""))
}
function updateAttr(item,type,value,operation)
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
function setLoreContent(item,line,lore)
{
	try
	{
		var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
		loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
		loreList.func_150304_a(line,new NBTTagString(lore))
	}
	catch(err)
	{
		print("在操作lore发生异常,可能是因为没有lore 请将报错提供给作者:"+err)
	}
	//修改物品lore某一行
	/*
	*ScriptItemStack item:要修改lore的物品
	*int line:要修改lore的行数
	*String lore:替换原来lore的lore
	*/
}
function addLoreContent(item,lore)
{
	var NBTTagCompound=Java.type("net.minecraft.nbt.NBTTagCompound")
	var NBTTagList=Java.type("net.minecraft.nbt.NBTTagList")
	var NBTTagString=Java.type("net.minecraft.nbt.NBTTagString")
	nbt=item.getMCItemStack().field_77990_d;
	if(nbt==null)
	{
		nbt=new NBTTagCompound();
	}
	if(nbt.func_74775_l("display")=="{}")
	{
		displayTag=new NBTTagCompound();
		nbt.func_74782_a("display",displayTag);
	}
	if(nbt.func_74775_l("display").func_74781_a("Lore")==null)
	{
		loreList=new NBTTagList();
		nbt.func_74775_l("display").func_74782_a("Lore",loreList);
	}
	item.getMCItemStack().field_77990_d=nbt;
	loreList=item.getMCItemStack().field_77990_d.func_74775_l("display").func_74781_a("Lore")
	loreList.func_74742_a(new NBTTagString(lore))
	//为物品增加lore
	/*
	*ScriptItemStack item:要增加lore的物品
	*String lore:要增加的lore
	*/
}
//添加lore
function getLoreContent(item,line){
  var NBTTagCompound = Java.type("net.minecraft.nbt.NBTTagCompound");
  Item=item.getMCItemStack();
  var nbt=Item.field_77990_d;
  if(nbt==null){
  return -1
  };
  if(nbt.func_74775_l("display")!==null){
  var loreLength=nbt.func_74775_l("display").func_150295_c("Lore",8).func_74745_c();
  if(line<=loreLength){
  var lore=nbt.func_74775_l("display").func_150295_c("Lore",8).func_150307_f(line)
  return lore
  }}else{
  return -1
  }}
//获取某一行的lore内容