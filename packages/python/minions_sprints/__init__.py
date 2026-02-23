"""
Minions Sprints Python SDK

Sprint definitions, scope, and velocity tracking
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Sprints.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
