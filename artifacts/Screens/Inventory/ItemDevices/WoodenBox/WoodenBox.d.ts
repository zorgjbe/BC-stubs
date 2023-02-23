/**
 * Loads the wooden box's extended item properties
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point.
 * @returns {void} - Nothing
 */
declare function InventoryItemDevicesWoodenBoxLoad(OriginalFunction: () => void): void;
/**
 * Draw handler for the wooden box's extended item screen
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point.
 * @returns {void} - Nothing
 */
declare function InventoryItemDevicesWoodenBoxDraw(OriginalFunction: () => void): void;
/**
 * Exits the wooden box's extended item screen, sends a chatroom message if appropriate, and cleans up inputs and text
 * @returns {void} - Nothing
 */
declare function InventoryItemDevicesWoodenBoxExit(): void;
declare function AssetsItemDevicesWoodenBoxAfterDraw(data: DynamicDrawingData): void;
