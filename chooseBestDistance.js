const chooseBestDistance = (t, k, ls) => {
    
	const fact = (n) => (n == 1 || n == 0) ? 1 : n * fact(n - 1);

	const C = (n, k) => (n < k) ? null : (fact(n) / fact(k) / fact(n - k));

	const combination = (index, k, A) => {	
		let res = [0];
		let n = A.length;
		let s = 0;
		for (let t = 1; t <= k; t++) {
			let j = res[t - 1] + 1;
			while ((j < (n - k + t)) && ((s + C(n - j, k - t)) <= index)) {
				s += C(n - j, k - t);      
				j++;
			}
			res.push(j);
		}
		res.splice(0, 1);
		return res;	
	}

	const sumElement = (k, M) => {
		let b = [], y = [], d=[];
		let index = 0;
		if (k < 1) {
			return null;
		} else {
			for (let i = 0; i < C(M.length, k); i++) {
				let w = combination(i, k, M);  
				let x = w.map ((num)=>num-1);
				for (let j = 0; j < x.length; j++) {
					index = x[j];
					b.push(M[index]);
					d = b.reduce((num1, num2)=>num1+num2);
				}
				y.push(d);    
				b=[];
				d=[];
			}
			return y;
		}
	}

	const lsMax = (t, S) => {
		let max = 0;
		if (t <= 0) {
			return null;
		} else {			
			for (let i = 0; i < S.length; i++) {			
				if ((S[i] > max) && (S[i] <= t)) { 
					max = S[i];
				}
			} 
		}
		if (max !== 0) {
			return max;
		} else {
			return null;
		}
	}
	
	let sum = sumElement(k, ls);
	return lsMax (t, sum);    
}


