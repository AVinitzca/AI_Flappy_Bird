class Loop
{		
	constructor(chromosomes)
	{
		this.chromosomes = chromosomes;
	}
	
	progress()
	{
		this.nextGeneration = [];
		this.sortChromosomes();
		this.select();
		this.breed();		
		this.mutate();
	}
	
	sortChromosomes()
	{
		if(Config.fitnessMode > 0)
			this.chromosomes.sort(function(a, b) { return b.score - a.score; });
		else 
			this.chromosomes.sort(function(a, b) { return a.score - b.score; });
	}
	
	select()
	{		
		// Pseudo-Random control				
		var average = 0;
		var scores = [];
		for(var index = 0; index < Config.population; index++)
		{
			average += this.chromosomes[index].score;
			scores.push(this.chromosomes[index].score);
		}
		
		average /= Config.population;
		
		var passFilter = scores.map((score) => Math.floor(score / average));
		var belowFilter = scores.map((score) => score % average);
		
		this.firstGenerated = 0;
		for(var index = 0; index < Config.population; index++)
		{			
			for(var subIndex = 0; subIndex < passFilter[index]; subIndex++)
			{
				// Clone
				this.nextGeneration.push(this.chromosomes[index].clone());						
				this.firstGenerated++;
			}
		}
	}
	
	breed()
	{		
		var generationLength = this.nextGeneration.length;
		
		for(var index = generationLength; index < Config.population; index++)
		{
			var firstChromosome = this.nextGeneration[Math.floor(randomNumber(0, generationLength))];
			var secondChromosome = this.nextGeneration[Math.floor(randomNumber(0, generationLength))];
				
			var factor = Math.random();
			var child = firstChromosome.lerp(secondChromosome, factor);			
			this.nextGeneration.push(child);
		}		
	}
	
	mutate()
	{		
		
		for(var index = this.firstGenerated; index < Config.population; index++)
		{
			var chromosome = this.nextGeneration[index];
			chromosome.mutate(Config.mutationRate, Config.mutationFactor);
		}
	}

}


function lerp(v0, v1, t) 
{
    return v0*(1-t)+v1*t
}