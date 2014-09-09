var status = 'on';

function lightSwitch() {
	if (status === 'on') {
		document.body.className = 'dark';
		status = 'off';
		// turn off
	} else {
		document.body.className = '';
		status = 'on';
		// turn on
	}
}

document.getElementById('light_switch').onclick = lightSwitch;