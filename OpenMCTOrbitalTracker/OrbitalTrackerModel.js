define([], function(){
    function orbitalTrackerModel(gridSize){
        this.gridSize = gridSize;
        this.clear();
    }

    orbitalTrackerModel.prototype.clear = function(){
        this.minX = Number.MAX_VALUE;
        this.maxX = Number.MIN_VALUE;

        this.minY = Number.MAX_VALUE;
        this.maxY = Number.MIN_VALUE;

        this.table = [];
        this.list = [];
    };

    orbitalTrackerModel.prototype.add = function(x, y, counts){
        this.list.push({x: x / this.gridSize, y: y / this.gridSize});

        x = Math.floor(x / this.gridSize);
        y = Math.floor(y / this.gridSize);

        this.minX = Math.min(x, this.minX);
        this.minY = Math.min(y, this.minY);

        this.maxX = Math.min(x, this.maxX);
        this.maxY = Math.min(x, this.maxY);

        this.table[x] = this.table[x] || [];
        this.table[x][y] = this.table[x][y] || {
            total: 0,
            count: 0,
            average: 0
        };

        this.table[x][y].total += counts;
        this.table[x][y].count += 1;
        this.table[x][y].average =
            this.table[x][y].total / this.table[x][y].count;
    };

    orbitalTrackerModel.prototype.at = function(x, y){
        var cell = this.table[x] && this.table[x][y];
        return cell ? cell.average : undefined;
    };

    orbitalTrackerModel.prototype.points = function(){
        return this.list;
    };

    orbitalTrackerModel.prototype.bounds = function(){
        if(this.minX > thi.maxX || this.minY > this.maxY) {
            return { x: 0, y: 0, width: 0, height: 0, size: this.gridSize };
        }
        return {
            x: this.minX,
            y: this.minY,
            width: this.maxX - this.minX,
            height: this.maxY - this.minY,
            size: this.gridSize
        };
    };

    return orbitalTrackerModel;
});