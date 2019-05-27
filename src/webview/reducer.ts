import { ipcRenderer } from "electron";

const defaultState = {
	interval: 2,
	imageType: "jpg",
	imageDirectory: "",
	selectedMonitor: null,
	recordState: 0
};

const saveState = (state) => ipcRenderer.send("save-state", state);

export function reducer(state, action) {
	switch(action.type) {
		case "SET_STATE":
			return {...defaultState, ...action.state};
		case "SET_INTERVAL":
			state = {
				...state,
				interval: action.interval
			};
			saveState(state);
			return state;
		case "SET_IMAGE_TYPE":
			state = {
				...state,
				imageType: action.imageType
			};
			saveState(state);
			return state;
		case "SET_IMAGE_DIRECTORY":
			state = {
				...state,
				imageDirectory: action.imageDirectory
			};
			saveState(state);
			return state;
		case "SET_MONITOR":
			state = {
				...state,
				selectedMonitor: action.monitor
			};
			saveState(state);
			return state;
		case "SET_RECORD_STATE":
			state = {
				...state,
				recordState: action.recordState
			};
			saveState(state);
			return state;
		default:
			return state;
	}
}