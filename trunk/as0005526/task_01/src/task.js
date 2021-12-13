let t = 0,
	n = 1n,
	f_t = 0,
	a = 0.9,
	b = 0.001,
	c = 1,
	d = 0.123;
console.log('Т.к. в JS отсутствует консольный ввод, используем хардкодные данные...');
n = 1.2;
if (n <= 1) {
	console.log('Время указано некорректно (неверно)');
	return 0;
}
let y1_t = [[], []];
let y2_t = [[], []];
console.log('Вводим входное тепло в Джоулях так же хардкодом...');
f_t = 120;
console.log('Вводим входную температуру в Цельсиях так же хардкодом...');
y1_t[0] = 25;
y2_t[0] = y1_t[0];
console.log(`Время: ${t + 1} секунд`);
y1_t[t + 1] = a * y1_t[t] + b * f_t;
y2_t[t + 1] = a * y2_t[t] - b * Math.pow(y2_t[0], 2) + c * f_t + d * Math.sin(f_t);
console.log(`Температура первого объекта: ${y1_t[t]} градусов по Цельсию`);
console.log(`Температура второго объекта: ${y2_t[t]} градусов по Цельсию`);
for (t = 1; t < n; t++) {
	y1_t[t + 1] = a * y1_t[t] + b * f_t;
	y2_t[t + 1] = a * y2_t[t] - b * Math.pow(y2_t[t - 1], 2) + c * f_t + d * Math.sin(f_t);
	console.log(`Время: ${t + 1} секунд`);
	console.log(`Температура первого объекта: ${y1_t[t]} градусов по Цельсию`);
	console.log(`Температура второго объекта: ${y2_t[t]} градусов по Цельсию`);
}
