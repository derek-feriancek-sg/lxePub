import os,sys; import time # ruff will complain about multiple imports and unused imports
import   json    # black will fix spacing

def   function_with_bad_spacing( x,y ,z):  # black will fix spacing, ruff may complain about naming
    unused_variable = 5  # ruff will complain about unused variable
    if x==y:  # black will fix spacing around operators
        print( "hello world" )  # black will fix spacing in function calls
    elif x>y:
        pass
    else:
        result=x+y*z  # black will fix spacing around operators
        return result

# Missing type annotations - mypy will complain
def another_function(param1, param2):
    return param1 + param2

class   badClass:  # black will fix spacing, ruff/PEP8 will complain about naming
    def __init__(self,value):  # black will fix spacing, mypy will complain about missing types
        self.value = value
        self.unused_attr = "test"  # potentially unused

    def method_with_issues(self, x):
        if x == None:  # ruff will suggest 'is None'
            return False
        global global_var  # ruff may complain about global usage
        global_var = x
        
# Long line that exceeds typical line length limits for ruff/black - this line is intentionally very long to trigger line length warnings from the linters
def very_long_function_name_that_is_unnecessarily_verbose_and_should_trigger_linting_issues(parameter_one, parameter_two, parameter_three):
    return parameter_one + parameter_two + parameter_three

# Missing docstrings - some linters complain about this
class UndocumentedClass:
    def undocumented_method(self):
        x = [1,2,3,4,5]  # black will fix spacing
        y = {'key':'value','other':'data'}  # black will fix spacing
        return x,y  # black will fix spacing

# Unreachable code
def function_with_unreachable_code():
    return "early return"
    print("This will never execute")  # ruff will complain about unreachable code

# Global variable (may trigger linting warnings)
global_var = None

# Trailing whitespace and inconsistent indentation (spaces/tabs mix)
def function_with_whitespace_issues():   
    print("mixed tabs and spaces")    
    return True  

# hello world derek
