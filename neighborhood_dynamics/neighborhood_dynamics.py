"""TO-DO: Write a description of what this XBlock is."""

import pkg_resources

from xblock.core import XBlock
from xblock.fields import Scope, Integer, String, Float
from xblock.fragment import Fragment
from django.template import Context,Template


class NeighborhoodDynamicsXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """
    
    display_name = String(display_name="Display Name",
                          default="Neighborhood Dynamics",
                          scope=Scope.settings,
                          help="Name of Xblock.")
    
    san_felipe_lower = Float(display_name="San Felipe Lower Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Lower bound")
    
    san_felipe_upper = Float(display_name="San Felipe Upper Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Upper bound")
    
    santa_ana_lower = Float(display_name="Santa Ana Lower Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Lower bound")
    
    santa_ana_upper = Float(display_name="Santa Ana Upper Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Upper bound")
    
    el_chorillo_lower = Float(display_name="El Chorillo Lower Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Lower bound")
    
    el_chorillo_upper = Float(display_name="El Chorillo Upper Bound",
                             default=1.0,
                             scope=Scope.settings,
                             help="Upper bound")
    
    san_felipe_1 = Float(display_name="San Felipe 1990 to 2000",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    san_felipe_2 = Float(display_name="San Felipe 2000 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    san_felipe_3 = Float(display_name="San Felipe 1990 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    santa_ana_1 = Float(display_name="Santa Ana 1990 to 2000",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    santa_ana_2 = Float(display_name="Santa Ana 2000 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    santa_ana_3 = Float(display_name="Santa Ana 1990 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    el_chorillo_1 = Float(display_name="El Chorillo 1990 to 2000",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    el_chorillo_2 = Float(display_name="El Chorillo 2000 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    el_chorillo_3 = Float(display_name="El Chorillo 1990 to 2010",
                             default=1.0,
                             scope=Scope.settings,
                             help="Percentage change")
    
    task1_tries = Integer(
        default=0, scope=Scope.user_state,
        help="Counter of user tries",)
    
    task2_tries = Integer(
        default=0, scope=Scope.user_state,
        help="Counter of user tries",)


    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        The primary view of the NeighborhoodDynamicsXBlock, shown to students
        when viewing courses.
        """
        
        template_str = self.resource_string("static/html/neighborhood_dynamics.html")
        template = Template(template_str)
        
        #parameters sent to browser for XBlock html page
        html = template.render(Context({
        }))
        
        frag = Fragment(html)
        frag.add_css(self.resource_string("static/css/neighborhood_dynamics.css"))
        frag.add_javascript(self.resource_string("static/js/src/neighborhood_dynamics.js"))
        frag.initialize_js('NeighborhoodDynamicsXBlock')
        return frag

      
    def studio_view(self, context=None):
        """
        Create a fragment used to display the edit view in the Studio.
        """
        
        template_str = self.resource_string("static/html/studio_view.html")
        template = Template(template_str)
        html = template.render(Context({
              'display_name': self.display_name,
              'san_felipe_lower': self.san_felipe_lower,
              'san_felipe_upper': self.san_felipe_upper,
              'santa_ana_lower': self.santa_ana_lower,
              'santa_ana_upper': self.santa_ana_upper,
              'el_chorillo_lower': self.el_chorillo_lower,
              'el_chorillo_upper': self.el_chorillo_upper,
              'san_felipe_1': self.san_felipe_1,
              'san_felipe_2': self.san_felipe_2,
              'san_felipe_3': self.san_felipe_3,
              'santa_ana_1': self.santa_ana_1,
              'santa_ana_2': self.santa_ana_2,
              'santa_ana_3': self.santa_ana_3,
              'el_chorillo_1': self.el_chorillo_1,
              'el_chorillo_2': self.el_chorillo_2,
              'el_chorillo_3': self.el_chorillo_3
            }))
        
        frag = Fragment(html.format(self=self))
        js_str = pkg_resources.resource_string(__name__, "static/js/src/studio_edit.js")
        frag.add_javascript(unicode(js_str))
        frag.initialize_js('StudioEdit')
        return frag

    @XBlock.json_handler
    def studio_submit(self, data, suffix=''):
        """
        Called when submitting the form in Studio.
        """
        self.display_name = data.get('display_name')
        self.san_felipe_lower = data.get('san_felipe_lower')
        self.san_felipe_upper = data.get('san_felipe_upper')
        self.santa_ana_lower = data.get('santa_ana_lower')
        self.santa_ana_upper = data.get('santa_ana_upper')
        self.el_chorillo_lower = data.get('el_chorillo_lower')
        self.el_chorillo_upper = data.get('el_chorillo_upper')
        self.san_felipe_1 = data.get('san_felipe_1')
        self.san_felipe_2 = data.get('san_felipe_2')
        self.san_felipe_3 = data.get('san_felipe_3')
        self.santa_ana_1 = data.get('santa_ana_1')
        self.santa_ana_2 = data.get('santa_ana_2')
        self.santa_ana_3 = data.get('santa_ana_3')
        self.el_chorillo_1 = data.get('el_chorillo_1')
        self.el_chorillo_2 = data.get('el_chorillo_2')
        self.el_chorillo_3 = data.get('el_chorillo_3')

        return {'result': 'success'}
      
    @XBlock.json_handler
    def submit_task1(self, data, suffix=''):
        self.task1_tries = self.task1_tries + 1;
        san_felipe = data['san_felipe_lower'] and data['san_felipe_upper'] and (self.san_felipe_lower == float(data['san_felipe_lower'])) and (self.san_felipe_upper == float(data['san_felipe_upper']))
        santa_ana = data['santa_ana_lower'] and data['santa_ana_upper'] and (self.santa_ana_lower == float(data['santa_ana_lower'])) and (self.santa_ana_upper == float(data['santa_ana_upper']))
        el_chorillo = data['el_chorillo_lower'] and data['el_chorillo_upper'] and (self.el_chorillo_lower == float(data['el_chorillo_lower'])) and (self.el_chorillo_upper == float(data['el_chorillo_upper']))
        
        return {
            'result': 'success', 
            'data': { 
                'san_felipe': san_felipe, 
                'santa_ana': santa_ana, 
                'el_chorillo': el_chorillo,
                'tries': self.task1_tries
            }
        }
      
    @XBlock.json_handler
    def submit_task2(self, data, suffix=''):
        self.task2_tries = self.task2_tries + 1;
        san_felipe1 = data['san_felipe_1'] and data['san_felipe_1'] and (self.san_felipe_1 == float(data['san_felipe_1'])) and (self.san_felipe_1 == float(data['san_felipe_1']))
        san_felipe2 = data['san_felipe_2'] and data['san_felipe_2'] and (self.san_felipe_2 == float(data['san_felipe_2'])) and (self.san_felipe_2 == float(data['san_felipe_2']))
        san_felipe3 = data['san_felipe_3'] and data['san_felipe_3'] and (self.san_felipe_3 == float(data['san_felipe_3'])) and (self.san_felipe_3 == float(data['san_felipe_3']))
        santa_ana1 = data['santa_ana_1'] and data['santa_ana_1'] and (self.santa_ana_1 == float(data['santa_ana_1'])) and (self.santa_ana_1 == float(data['santa_ana_1']))
        santa_ana2 = data['santa_ana_2'] and data['santa_ana_2'] and (self.santa_ana_2 == float(data['santa_ana_2'])) and (self.santa_ana_2 == float(data['santa_ana_2']))
        santa_ana3 = data['santa_ana_3'] and data['santa_ana_3'] and (self.santa_ana_3 == float(data['santa_ana_3'])) and (self.santa_ana_3 == float(data['santa_ana_3']))
        el_chorillo1 = data['el_chorillo_1'] and data['el_chorillo_1'] and (self.el_chorillo_1 == float(data['el_chorillo_1'])) and (self.el_chorillo_1 == float(data['el_chorillo_1']))
        el_chorillo2 = data['el_chorillo_2'] and data['el_chorillo_2'] and (self.el_chorillo_2 == float(data['el_chorillo_2'])) and (self.el_chorillo_2 == float(data['el_chorillo_2']))
        el_chorillo3 = data['el_chorillo_3'] and data['el_chorillo_3'] and (self.el_chorillo_3 == float(data['el_chorillo_3'])) and (self.el_chorillo_3 == float(data['el_chorillo_3']))
        
        return {
            'result': 'success',
            'data': { 
                'san_felipe1': san_felipe1,
                'san_felipe2': san_felipe2, 
                'san_felipe3': san_felipe3, 
                'santa_ana1': santa_ana1, 
                'santa_ana2': santa_ana2, 
                'santa_ana3': santa_ana3, 
                'el_chorillo1': el_chorillo1,
                'el_chorillo2': el_chorillo2,
                'el_chorillo3': el_chorillo3,
                'tries': self.task2_tries
            }
          }
      
    
    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("NeighborhoodDynamicsXBlock",
             """<neighborhood_dynamics/>
             """),
            ("Multiple NeighborhoodDynamicsXBlock",
             """<vertical_demo>
                <neighborhood_dynamics/>
                <neighborhood_dynamics/>
                <neighborhood_dynamics/>
                </vertical_demo>
             """),
        ]
