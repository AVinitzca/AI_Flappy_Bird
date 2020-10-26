class Network
{
	constructor(layers)
	{
		this.layers = layers;
	}

	lerp(network, factor)
	{		
		var layers = [];
		for(var index = 0; index < this.layers.length; index++)
			layers.push(this.layers[index].lerp(network.layers[index], factor));
		
		return new Network(layers);
	}
		
	mutate(rate, factor)
	{
		this.layers.forEach(l => l.mutate(rate, factor));
	}
	
	clone()
	{
		var clonedLayers = this.layers.map(l => l.clone());
		return new Network(clonedLayers);
	}
	
	output(input)
	{
		var values = input;
		for(var index = 0; index < this.layers.length; index++)
		{
			values = this.layers[index].output(values);
		}
		
		return values[0];
	}

}