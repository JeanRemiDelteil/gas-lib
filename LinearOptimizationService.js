var LinearOptimizationService = {};


/**
 * Status of the solver.

 */
LinearOptimizationService.Status = function(){};

/**
 * Status when it failed to find a solution for unexpected reasons.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.ABNORMAL = {};

/**
 * Status when a feasible (not necessarily optimal) solution has been found.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.FEASIBLE = {};

/**
 * Status when the current model is unfeasible (has no solution).
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.INFEASIBLE = {};

/**
 * Status when the model is invalid.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.MODEL_INVALID = {};

/**
 * Status when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code> has not been called yet.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.NOT_SOLVED = {};

/**
 * Status when an optimal solution has been found.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.OPTIMAL = {};

/**
 * Status when the current model is unbound.
 *
 * @type {{}}
 */
LinearOptimizationService.Status.prototype.UNBOUNDED = {};

/**
 * Type of variables created by the solver.

 */
LinearOptimizationService.VariableType = function(){};

/**
 * Type of variable that can take any real value.
 *
 * @type {{}}
 */
LinearOptimizationService.VariableType.prototype.CONTINUOUS = {};

/**
 * Type of variable that can only take integer values.
 *
 * @type {{}}
 */
LinearOptimizationService.VariableType.prototype.INTEGER = {};

/**
 * Creates an engine to to solve linear programs (potentially mixed-integer programs).

 <pre class="prettyprint">
 <code>
 // Creates a linear optimization engine.
 var engine = LinearOptimizationService.createEngine();
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...
 </code></pre>
 *
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */
LinearOptimizationService.createEngine = function(){};

/** @constructor */
LinearOptimizationService.LinearOptimizationConstraint = function(){};

/**
 * Sets the coefficient of a variable in the constraint. By default, variables have a coefficient
 of 0.

 <pre class="prettyprint">
 <code>
  var engine = LinearOptimizationService.createEngine();
  // Create a linear constraint with the bounds 0 and 10
  var constraint = engine.addConstraint(0, 10);
  // Create a variable so we can add it to the constraint
  engine.addVariable(&#39;x&#39;, 0, 5);
  // Set the coefficient of the variable in the constraint. The constraint is now:
  // 0 &lt;= 2 * x &lt;= 5
  constraint.setCoefficient(&#39;x&#39;, 2);
 </code> </pre>
 *
 * @param {String} variableName - the name of variable for which the coefficient is being set
 * @param {Number} coefficient - coefficient being set
 *
 * @return {LinearOptimizationService.LinearOptimizationConstraint} this linear optimization constraint
 */
LinearOptimizationService.LinearOptimizationConstraint.prototype.setCoefficient = function(variableName, coefficient){};

/** @constructor */
LinearOptimizationService.LinearOptimizationEngine = function(){};

/**
 * Adds a new linear constraint in the model. The upper and lower bound of the constraint
 are defined at creation time. Coefficients for the variables are defined via calls to
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint.html#setCoefficient(String,Number)'>LinearOptimizationConstraint.setCoefficient(variableName, coefficient)</a></code>.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Create a linear constraint with the bounds 0 and 10
 var constraint = engine.addConstraint(0, 10);

 // Create a variable so we can add it to the constraint
 engine.addVariable(&#39;x&#39;, 0, 5);

 // Set the coefficient of the variable in the constraint. The constraint is now:
 // 0 &lt;= 2 * x &lt;= 5
 constraint.setCoefficient(&#39;x&#39;, 2);
 </code></pre>
 *
 * @param {Number} lowerBound - lower bound of the constraint
 * @param {Number} upperBound - upper bound of the constraint
 *
 * @return {LinearOptimizationService.LinearOptimizationConstraint} the constraint created
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.addConstraint = function(lowerBound, upperBound){};

/**
 * Adds a new variable to the model. The variable is referenced by its name.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();
 var constraint = engine.addConstraint(0, 10);

 // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
 engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER, 2);
 // The objective is now 2 * x.

 // Add a real (continuous) variable
 engine.addVariable(&#39;y&#39;, 0, 100, LinearOptimizationService.VariableType.CONTINUOUS, -5);
 // The objective is now 2 * x - 5 * y.
 </code></pre>
 *
 * @param {String} name - unique name of the variable
 * @param {Number} lowerBound - lower bound of the variable
 * @param {Number} upperBound - upper bound of the variable
 * @param {LinearOptimizationService.VariableType} type - type of the variable, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
 * @param {Number} objectiveCoefficient - objective coefficient of the variable
 *
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.addVariable = function(name, lowerBound, upperBound, type, objectiveCoefficient){};

/**
 * Sets the optimization direction to maximizing the linear objective function.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add a real (continuous) variable. Notice the lack of type specification.
 engine.addVariable(&#39;y&#39;, 0, 100);

 // Set the coefficient of &#39;y&#39; in the objective.
 // The objective is now 5 * y
 engine.setObjectiveCoefficient(&#39;y&#39;, 5);

 // We want to maximize.
 engine.setMaximization();
 </code></pre>
 *
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.setMaximization = function(){};

/**
 * Sets the optimization direction to minimizing the linear objective function.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add a real (continuous) variable. Notice the lack of type specification.
 engine.addVariable(&#39;y&#39;, 0, 100);

 // Set the coefficient of &#39;y&#39; in the objective.
 // The objective is now 5 * y
 engine.setObjectiveCoefficient(&#39;y&#39;, 5);

 // We want to minimize
 engine.setMinimization();
 </code></pre>
 *
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.setMinimization = function(){};

/**
 * Sets the coefficient of a variable in the linear objective function.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add a real (continuous) variable. Notice the lack of type specification.
 engine.addVariable(&#39;y&#39;, 0, 100);

 // Set the coefficient of &#39;y&#39; in the objective.
 // The objective is now 5 * y
 engine.setObjectiveCoefficient(&#39;y&#39;, 5);
 </code></pre>
 *
 * @param {String} variableName - name of variable for which the coefficient is being set
 * @param {Number} coefficient - coefficient of the variable in the objective function
 *
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.setObjectiveCoefficient = function(variableName, coefficient){};

/**
 * Solves the current linear program. Returns the solution found.
 and if it is an optimal solution.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...

 // Solve the linear program
 var solution = engine.solve(300);
 if (!solution.isValid()) {
   throw &#39;No solution &#39; + solution.getStatus();
 }
 Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
 </code></pre>
 *
 * @param {Number} seconds - deadline for solving the problem, in seconds; the maximum deadline is
     300 seconds
 *
 * @return {LinearOptimizationService.LinearOptimizationSolution} solution of the optimization
 */
LinearOptimizationService.LinearOptimizationEngine.prototype.solve = function(seconds){};

/** @constructor */
LinearOptimizationService.LinearOptimizationSolution = function(){};

/**
 * Gets the value of the objective function in the current solution.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...

 // Solve the linear program
 var solution = engine.solve();
 Logger.log(&#39;ObjectiveValue: &#39; + solution.getObjectiveValue());
 </code></pre>
 *
 * @return {Number} the value of the objective function
 */
LinearOptimizationService.LinearOptimizationSolution.prototype.getObjectiveValue = function(){};

/**
 * Gets the status of the solution. Before solving a problem, the status will be
 <code>NOT_SOLVED</code>.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...

 // Solve the linear program
 var solution = engine.solve();
 if (solution.getStatus() != LinearOptimizationService.Status.FEASIBLE &amp;&amp;
     solution.getStatus() != LinearOptimizationService.Status.OPTIMAL) {
   throw &#39;No solution &#39; + status;
 }
 Logger.log(&#39;Status: &#39; + solution.getStatus());
 </code></pre>
 *
 * @return {LinearOptimizationService.Status} the status of the solver
 */
LinearOptimizationService.LinearOptimizationSolution.prototype.getStatus = function(){};

/**
 * Gets the value of a variable in the solution created by the last call to
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code>.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...

 // Solve the linear program
 var solution = engine.solve();
 Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
 </code></pre>
 *
 * @param {String} variableName - name of the variable
 *
 * @return {Number} the value of the variable in the solution
 */
LinearOptimizationService.LinearOptimizationSolution.prototype.getVariableValue = function(variableName){};

/**
 * Determines whether the solution is either feasible or optimal.

 <pre class="prettyprint">
 <code>
 var engine = LinearOptimizationService.createEngine();

 // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 engine.addVariable(&#39;x&#39;, 0, 10);

 // ...

 // Solve the linear program
 var solution = engine.solve();
 if (!solution.isValid()) {
   throw &#39;No solution &#39; + status;
 }
 </code></pre>
 *
 * @return {Boolean} <code>true</code> if the solution is valid (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#FEASIBLE'>Status.FEASIBLE</a></code> or
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#OPTIMAL'>Status.OPTIMAL</a></code>); <code>false</code> if not
 */
LinearOptimizationService.LinearOptimizationSolution.prototype.isValid = function(){};

