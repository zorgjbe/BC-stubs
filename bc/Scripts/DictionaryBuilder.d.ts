/**
 * @param {ChatMessageDictionaryEntry | TaggedDictionaryEntry} entry
 * @returns {entry is TaggedDictionaryEntry}
 */
declare function IsTaggedDictionaryEntry(entry: ChatMessageDictionaryEntry | TaggedDictionaryEntry): entry is TaggedDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is CharacterReferenceDictionaryEntry}
 */
declare function IsCharacterReferenceDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is CharacterReferenceDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is SourceCharacterDictionaryEntry}
 */
declare function IsSourceCharacterDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is SourceCharacterDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is TargetCharacterDictionaryEntry}
 */
declare function IsTargetCharacterDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is TargetCharacterDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is FocusGroupDictionaryEntry}
 */
declare function IsFocusGroupDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is FocusGroupDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is TextDictionaryEntry}
 */
declare function IsTextDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is TextDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is TextLookupDictionaryEntry}
 */
declare function IsTextLookupDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is TextLookupDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is GroupReferenceDictionaryEntry}
 */
declare function IsGroupReferenceDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is GroupReferenceDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is AssetReferenceDictionaryEntry}
 */
declare function IsAssetReferenceDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is AssetReferenceDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is ShockEventDictionaryEntry}
 */
declare function IsShockEventDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is ShockEventDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is AutomaticEventDictionaryEntry}
 */
declare function IsAutomaticEventDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is AutomaticEventDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is ActivityCounterDictionaryEntry}
 */
declare function IsActivityCounterDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is ActivityCounterDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is AssetGroupNameDictionaryEntry}
 * @deprecated
 */
declare function IsAssetGroupNameDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is AssetGroupNameDictionaryEntry;
/**
 * @param {ChatMessageDictionaryEntry} entry
 * @returns {entry is ActivityNameDictionaryEntry}
 */
declare function IsActivityNameDictionaryEntry(entry: ChatMessageDictionaryEntry): entry is ActivityNameDictionaryEntry;
/**
 * Build class for chat message dictionaries
 */
declare class DictionaryBuilder {
    /** @type {ChatMessageDictionaryEntry[]} */
    _entries: ChatMessageDictionaryEntry[];
    /** @type {DictionaryBuilder[]} */
    _children: DictionaryBuilder[];
    _targetIndex: number;
    /** @type {boolean} */
    _condition: boolean;
    /**
     * Creates and enters a child {@link ConditionalDictionaryBuilder}, whose entries are only added if the provided
     * condition is truthy.
     * @param {boolean} condition - The condition to check
     * @returns {ConditionalDictionaryBuilder} - The child {@link ConditionalDictionaryBuilder} instance
     */
    if(condition: boolean): ConditionalDictionaryBuilder;
    /**
     * Constructs a dictionary array from the data passed to this instance.
     * @returns {ChatMessageDictionaryEntry[]} - The constructed dictionary
     */
    build(): ChatMessageDictionaryEntry[];
    /**
     * Adds a SourceCharacter dictionary entry
     * @param {Character} character - The character which should be referenced by the SourceCharacter entry
     * @returns {this}
     */
    sourceCharacter(character: Character): this;
    /**
     * Adds a DestinationCharacter dictionary entry
     * @param {Character} character - The character which should be referenced by the DestinationCharacter entry
     * @returns {this}
     */
    destinationCharacter(character: Character): this;
    /**
     * Adds a DestinationCharacterName dictionary entry
     * @param {Character} character - The character which should be referenced by the DestinationCharacterName entry
     * @returns {this}
     */
    destinationCharacterName(character: Character): this;
    /**
     * Adds a TargetCharacter dictionary entry
     * @param {Character} character - The character which should be referenced by the TargetCharacter entry
     * @param {number} [index] - The target character index if there is more than one target character
     * @returns {this}
     */
    targetCharacter(character: Character, index?: number): this;
    /**
     * Adds a TargetCharacterName dictionary entry
     * @param {Character} character - The character which should be referenced by the TargetCharacterName entry
     * @returns {this}
     */
    targetCharacterName(character: Character): this;
    /**
     * Adds a dictionary entry which identifies a given group.
     * @param {string} tag - The tag to use as the substitution
     * @param {AssetGroupName} groupName - The name of the group
     * @returns {this}
     */
    group(tag: string, groupName: AssetGroupName): this;
    /**
     * Adds a dictionary entry which identifies the focused group - the group that was acted upon to generate the message, if applicable.
     * @param {AssetGroupItemName} groupName - The name of the focus group
     * @returns {this}
     */
    focusGroup(groupName: AssetGroupItemName): this;
    /**
     * Adds a dictionary entry which identifies an asset - usually the asset being changed, but the tag can be customized.
     * @param {Asset} asset - The asset in question
     * @param {string} [tag] - The tag to replace
     * @param {string} [craftName] - The name of the crafted item if applicable
     * @returns {this}
     */
    asset(asset: Readonly<{
        Name: string;
        Description: string;
        Group: AssetGroup;
        ParentItem?: string;
        ParentGroupName?: AssetGroupName;
        Enable: boolean;
        Visible: boolean;
        NotVisibleOnScreen?: readonly string[];
        Wear: boolean;
        Activity: ActivityName;
        AllowActivity?: readonly ActivityName[];
        ActivityAudio?: readonly string[];
        ActivityExpression: Partial<Record<ActivityName, readonly ExpressionTrigger[]>>;
        AllowActivityOn?: readonly AssetGroupItemName[];
        BuyGroup?: string;
        PrerequisiteBuyGroups?: readonly string[];
        Effect: readonly EffectName[];
        Bonus?: AssetBonusName;
        Block?: readonly AssetGroupItemName[];
        Expose: readonly AssetGroupItemName[];
        Hide?: readonly AssetGroupName[];
        HideItem?: readonly string[];
        HideItemExclude: readonly string[];
        HideItemAttribute: readonly AssetAttribute[];
        Require: readonly AssetGroupBodyName[];
        SetPose?: readonly AssetPoseName[];
        AllowPose: readonly AssetPoseName[];
        HideForPose: readonly ("" | AssetPoseName)[];
        PoseMapping?: Partial<Record<AssetPoseName, "" | AssetPoseName>>;
        AllowActivePose?: readonly AssetPoseName[];
        WhitelistActivePose?: readonly AssetPoseName[];
        Value: number;
        Difficulty: number;
        SelfBondage: number;
        SelfUnlock: boolean;
        ExclusiveUnlock: boolean;
        Random: boolean;
        RemoveAtLogin: boolean;
        WearTime: number;
        RemoveTime: number;
        RemoveTimer: number;
        MaxTimer: number;
        DrawingPriority?: number;
        DrawingLeft?: number;
        DrawingTop?: number;
        HeightModifier: number;
        ZoomModifier: number;
        Alpha?: readonly AlphaDefinition[];
        Prerequisite: readonly AssetPrerequisite[];
        Extended: boolean;
        AlwaysExtend: boolean;
        AlwaysInteract: boolean;
        AllowLock: boolean;
        LayerVisibility: boolean;
        IsLock: boolean;
        PickDifficulty: number;
        OwnerOnly: boolean;
        LoverOnly: boolean;
        FamilyOnly: boolean;
        ExpressionTrigger?: readonly ExpressionTrigger[];
        RemoveItemOnRemove: readonly {
            Name: string;
            Group: AssetGroupName;
            Type?: string;
        }[];
        AllowEffect?: readonly EffectName[];
        AllowBlock?: readonly AssetGroupItemName[];
        AllowHide?: readonly AssetGroupName[];
        AllowHideItem?: readonly string[];
        AllowTypes?: readonly string[];
        AllowTighten?: boolean;
        DefaultColor: readonly string[];
        Opacity: number;
        MinOpacity: number;
        MaxOpacity: number;
        Audio?: string;
        Category?: readonly AssetCategory[];
        Fetish?: readonly FetishName[];
        CustomBlindBackground?: string;
        ArousalZone: AssetGroupItemName;
        IsRestraint: boolean;
        BodyCosplay: boolean;
        OverrideBlinking: boolean;
        DialogSortOverride?: DialogSortOrder;
        DynamicDescription: (C: Character) => string;
        DynamicPreviewImage: (C: Character) => string;
        DynamicAllowInventoryAdd: (C: Character) => boolean;
        DynamicName: (C: Character) => string;
        DynamicGroupName: AssetGroupName;
        DynamicActivity: (C: Character) => ActivityName;
        DynamicAudio: (C: Character) => string;
        CharacterRestricted: boolean;
        AllowRemoveExclusive: boolean;
        InheritColor?: AssetGroupName;
        DynamicBeforeDraw: boolean;
        DynamicAfterDraw: boolean;
        DynamicScriptDraw: boolean;
        HasType: boolean;
        AllowLockType?: readonly string[];
        AllowColorizeAll: boolean;
        AvailableLocations: readonly string[];
        OverrideHeight?: AssetOverrideHeight;
        FreezeActivePose: readonly AssetPoseCategory[];
        DrawLocks: boolean;
        AllowExpression?: readonly ExpressionName[];
        MirrorExpression?: AssetGroupBodyName;
        FixedPosition: boolean;
        Layer: readonly AssetLayer[];
        ColorableLayerCount: number;
        Archetype?: ExtendedArchetype;
        Attribute: readonly AssetAttribute[];
        PreviewIcons: readonly InventoryIcon[];
        Tint: readonly TintDefinition[];
        AllowTint: boolean;
        DefaultTint?: string;
        Gender?: AssetGender;
        CraftGroup: string;
        ColorSuffix: Record<string, string>;
        ExpressionPrerequisite?: readonly AssetPrerequisite[];
    }>, tag?: string, craftName?: string): this;
    /**
     * Adds a text dictionary entry. This is a straightforward dictionary entry where the provided tag will be directly
     * replaced by the given text.
     * @param {string} tag - The tag to replace
     * @param {string} text - The text to replace the tag with
     * @returns {this}
     */
    text(tag: string, text: string): this;
    /**
     * Adds a text lookup dictionary entry. A text lookup will be performed on the provided lookup text, and the
     * resulting value will be used to replace the associated tag.
     * @param {string} tag - The tag to replace
     * @param {string} lookupText - The text to look up and replace the tag with
     * @returns {this}
     */
    textLookup(tag: string, lookupText: string): this;
    /**
     * Adds a shock intensity entry.
     * @param {number} intensity - The intensity of the shock applied
     * @returns {this}
     */
    shockIntensity(intensity: number): this;
    /**
     * Marks the message as being automatically generated. Usually used by automated vibe changes.
     * Those will get filtered out depending on the reciever's chat settings.
     * @returns {this}
     */
    markAutomatic(): this;
    /**
     * Adds a dictionary entry to the builder
     * @param {ChatMessageDictionaryEntry} entry - The dictionary entry to add
     * @returns {boolean} - True if the entry was successfully added, false otherwise
     * @protected
     */
    protected _addEntry(entry: ChatMessageDictionaryEntry): boolean;
    /**
     * Adds a character reference dictionary entry for the given character reference tag and character.
     * @param {CharacterReferenceTag} tag - The character reference tag that should be added
     * @param {Character} character - The character that should be referenced
     * @returns {this}
     * @private
     */
    private _addCharacterReference;
}
/**
 * A {@link DictionaryBuilder} class which adds its dictionary entries based on a boolean condition. If the condition
 * evaluates to truthy, then it will behave exactly like a {@link DictionaryBuilder}. However, if the condition
 * evaluates to falsy, then it will always build an empty array.
 */
declare class ConditionalDictionaryBuilder extends DictionaryBuilder {
    /**
     * Constructs a new ConditionalDictionaryBuilder instance with the given parent and condition.
     * @param {DictionaryBuilder} parent - The parent {@link DictionaryBuilder} instance
     * @param {boolean} condition - The condition that should determine whether or not this builder adds entries.
     */
    constructor(parent: DictionaryBuilder, condition: boolean);
    /** @type {DictionaryBuilder} */
    _parent: DictionaryBuilder;
    /**
     * Returns the parent {@link DictionaryBuilder instance}. Used to effectively end input to this builder.
     * @returns {DictionaryBuilder} - The parent builder
     */
    endif(): DictionaryBuilder;
}
