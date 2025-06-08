def   function_with_bad_spacing( x,y ,z):  # black will fix spacing, ruff may complain about naming
    if x==y:  # black will fix spacing around operators
        print( "hello world" )  # black will fix spacing in function calls
    elif x>y:
        pass
    else:
        result=x+y*z  # black will fix spacing around operators
        return result

def happy_hacking():
    return "happy hacking!"
