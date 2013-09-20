# More info at https://github.com/guard/guard#readme

# SASS
guard :sass, :input => "style/scss", :output => "style/css"

# JAMMIT
guard :jammit, :config_path => "assets.yml", :output_folder => "." do
  watch(%r{(?:style|javascript)(/.+)\.(?:css|js)}) { |m| m[0] unless m[1] =~ /\/\./ }
end
