


class Neuron
{
	constructor(weights)
	{
		this.weights = weights;
	}
	
	lerp(neuron, factor)
	{
		var weights = [];
		for(var index = 0; index < this.weights.length; index++)
			weights.push(lerp(this.weights[index], neuron.weights[index], factor));
		return new Neuron(weights);
	}

	
	mutate(rate, factor)
	{
		this.weights = this.weights.map((weight) => weight += ((Math.random() <= rate) ? 1.0 : 0.0) * (Math.random() * 2.0 - 1.0) * factor);
	}
	
	output(inputs)
	{
		var output = 0;
		for(var index = 0; index < inputs.length; index++)
			output += this.weights[index] * inputs[index];
		return this.activation(output);
	}
	
	
	activation(input)
	{
		var inverse = (-input) / 1;
		return (1 / (1 + Math.exp(inverse)));
	}
	
	clone()
	{
		return new Neuron([...this.weights]);
	}
	
}

function lerp(v0, v1, t) 
{
    return v0*(1-t)+v1*t
}