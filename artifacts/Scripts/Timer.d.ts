/**
 * Returns the current time from the local computer clock
 * @returns {number} - Returns the number of milliseconds
 */
declare function TimerGetTime(): number;
/**
 * Returns a string of the time remaining on a given timer
 * @param {number} T - Time to convert to a string in ms
 * @returns {string} - The time string in the DD:HH:MM:SS format (Days and hours not displayed if it contains none)
 */
declare function TimerToString(T: number): string;
/**
 * Returns a string of the time remaining on a given timer (Hours and minutes only)
 * @param {Date} T - Time to convert to a string in ms
 * @returns {string} - The time string in the HH:MM format
 */
declare function TimerHourToString(T: Date): string;
/**
 * Check if we must remove items from characters. (Expressions, items being removed, locks, etc.)
 * @returns {void} - Nothing
 */
declare function TimerInventoryRemove(): void;
/**
 * Sets a remove timer in seconds for a specific item part / body part
 * @param {Character} C - Character for which we are removing an item
 * @param {AssetGroupName} AssetGroup - Group targeted by the removal
 * @param {number} Timer - Seconds it takes to remove the item
 * @returns {void} - Nothing
 */
declare function TimerInventoryRemoveSet(C: Character, AssetGroup: AssetGroupName, Timer: number): void;
/**
 * Random trigger for the NPC owner in a private room. If possible, when triggered it will beep the player anywhere in the club, the player has 2 minutes to get back to her
 * @returns {void} - Nothing
 */
declare function TimerPrivateOwnerBeep(): void;
/**
 * Main timer process
 * @param {number} Timestamp - Time in ms of the time when the function was called
 * @returns {void} - Nothing
 */
declare function TimerProcess(Timestamp: number): void;
/**
 * Returns a string of the time remaining on a given timer (Hours, minutes, seconds)
 * @param {number} s - Time to convert to a string in ms
 * @Returns -  The time string in the HH:MM:SS format
 */
declare function TimermsToTime(s: number): string;
declare var CurrentTime: number;
declare var TimerRunInterval: number;
declare var TimerLastTime: number;
declare var TimerLastCycleCall: number;
declare var TimerLastArousalProgress: number;
declare var TimerLastArousalProgressCount: number;
declare var TimerLastArousalDecay: number;
